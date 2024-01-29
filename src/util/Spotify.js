const clientId = '0a704d21dc6c41429775feb53272a67c';
const redirectUrl = 'https://jammmmmming.netlify.app/'; 
// const redirectUrl = 'http://localhost:3000';        

const authorizationEndpoint = "https://accounts.spotify.com/authorize";
const tokenEndpoint = "https://accounts.spotify.com/api/token";
const scope = 'user-read-private playlist-modify-private playlist-modify-public';

let userName = '';
let userId = '';
let images = [];

// Data structure that manages the current active token, caching it in localStorage
const currentToken = {
  get access_token() { return localStorage.getItem('access_token') || null; },
  get refresh_token() { return localStorage.getItem('refresh_token') || null; },
  get expires_in() { return localStorage.getItem('refresh_in') || null },
  get expires() { return localStorage.getItem('expires') || null },

  save: function (response) {
    const { access_token, refresh_token, expires_in } = response;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    localStorage.setItem('expires_in', expires_in);

    const now = new Date();
    const expiry = new Date(now.getTime() + (expires_in * 1000));
    localStorage.setItem('expires', expiry);
  }
};

// On page load, try to fetch auth code from current browser search URL
const args = new URLSearchParams(window.location.search);
const code = args.get('code');

// If we find a code, we're in a callback, do a token exchange
if (code) {
  const token = await getToken(code);
  currentToken.save(token);

  // Remove code from URL so we can refresh correctly.
  const url = new URL(window.location.href);
  url.searchParams.delete("code");

  const updatedUrl = url.search ? url.href : url.href.replace('?', '');
  window.history.replaceState({}, document.title, updatedUrl);
}

// If we have a token, we're logged in, so fetch user data
if (currentToken.access_token) {
  const userData = await getUserData();
  userName = userData.display_name;
  userId = userData.id;
  images = userData.images;
}

// Otherwise we're not logged in
// if (!currentToken.access_token) {

// }

async function redirectToSpotifyAuthorize() {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const randomString = randomValues.reduce((acc, x) => acc + possible[x % possible.length], "");

  const code_verifier = randomString;
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest('SHA-256', data);

  const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  window.localStorage.setItem('code_verifier', code_verifier);

  const authUrl = new URL(authorizationEndpoint)
  const params = {
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    code_challenge_method: 'S256',
    code_challenge: code_challenge_base64,
    redirect_uri: redirectUrl,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
}

// Spotify API Calls
async function getToken(code) {
  const code_verifier = localStorage.getItem('code_verifier');

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUrl,
      code_verifier: code_verifier,
    }),
  });

  return await response.json();
}

async function getUserData() {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
  });

  return await response.json();
}

async function getTracks(query) {
    const response = await fetch("https://api.spotify.com/v1/search?type=track&q="+query, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
    });

    return await response.json();
}

async function createPlaylist(playlistName) {
    const response = await fetch("https://api.spotify.com/v1/users/"+userId+"/playlists", {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
        body: JSON.stringify({
            name: playlistName,
            description: 'Created with the Jammming App!',
            public: true
        }),
    });

    return await response.json();
}

async function addTracksToPlaylist(playlistId,uris) {
    const response = await fetch("https://api.spotify.com/v1/playlists/"+playlistId+"/tracks?uris="+uris, {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
    });

    return await response.json();
}

// Click handlers
async function loginWithSpotifyClick() {
    await redirectToSpotifyAuthorize();
  }

async function logoutClick() {
  localStorage.clear();
  window.location.href = redirectUrl;
}

export { loginWithSpotifyClick, logoutClick, userName, images, getTracks, createPlaylist, addTracksToPlaylist };