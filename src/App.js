import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { loginWithSpotifyClick, logoutClick, userName } from './components/SpotifyApiAccess';
import './styles/App.css';
import { useState } from 'react';

function App() {

  const tracks = [
    {
      id: "1",
      name: "Lofi",
      uri: "spotify:track:6sAn8zDfv8nIq3gdce7QNI",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "2",
      name: "Slow",
      uri: "spotify:track:0OaytH0mCt8DkPWIKExBZn",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "3",
      name: "Home",
      uri: "spotify:track:06kb14hmOLsOqYhZr4FV2b",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "4",
      name: "Chill",
      uri: "spotify:track:2v1g7Jzjg5Dqtj1Il4xl5P",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "12345",
      name: "Let it Be",
      uri: "spotify:track:7iN1s7xHE4ifF5povM6A48",
      album: {name: "Let it Be"},
      artists: {name: "Beatles"},
    },
    {
      id: "12356",
      name: "Waterloo Sunset",
      uri: "spotify:track:3G0EALIIp5DAeIERxXBHmo",
      album: {name: "Something Else"},
      artists: {name: "The Kinks"},
    },
    {
      id: "1234567",
      name: "(Sittin’ On) the Dock of the Bay",
      uri: "spotify:track:3zBhihYUHBmGd2bcQIobrF",
      album: {name: "Let it Be"},
      artists: {name: "Otis Redding"},
    }
  ];


  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [searchWords, setSearchWords] = useState([]);
  // TODO setup search results 
  // const [searchResults, setSearchResults] = useState(tracks);
  
  const addTrack = (track) => {
    // TODO only add if track not in playlist
    if (!playlist.find(t => t.id === track.id)) {
      setPlaylist((playlist) => [track, ...playlist]);
    }
  }

  const removeTrack = (trackIdToRemove) => {
    setPlaylist((playlist) => playlist.filter((track) => track.id !== trackIdToRemove));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span style={{color: "#ffccff"}}>mmm</span>ing</h1>
      </header>
      <main>
        <button id="login-button" onClick={userName ? logoutClick : loginWithSpotifyClick}>{userName ? userName + " Logout" : "Login with Spotify"}  </button>
        <SearchBar setSearchWords={setSearchWords} />
        <div className="row">
          <div className="column">
            <div>{searchWords.map(word => `"${word}" `)}</div>
            <SearchResults tracks={tracks} addTrack={addTrack} />
          </div>
          <div className="column">
            <div>{playlistName}</div>
            <Playlist playlist={playlist} setPlaylistName={setPlaylistName} removeTrack={removeTrack} />
          </div>
        </div>
      </main>
      <footer>
        Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>
  );
}

export default App;
