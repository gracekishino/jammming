import { useState } from 'react';
import './styles/App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { loginWithSpotifyClick, logoutClick, userName, userImageUrl, getTracks, createPlaylist } from './util/Spotify';

function App() {

  const [searchTracks, setSearchTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  
  const search = (query) => {
    getTracks(query).then(jsonResponse => {
      setSearchTracks(jsonResponse.tracks.items);
    });
  }

  const addTrack = (track) => {
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks((playlistTracks) => [...playlistTracks, track]);
    }
  }

  const removeTrack = (trackIdToRemove) => {
    setPlaylistTracks((playlistTracks) => playlistTracks.filter((track) => track.id !== trackIdToRemove));
  }

  const savePlaylist = () => {    
    if (!playlistName || !playlistTracks.length) {
      // TODO show message saying enter name or add tracks
      return;
    }
    const uris = playlistTracks.map(track => track.uri);
    createPlaylist(playlistName, uris);
    setPlaylistName('New PLaylist');
    setPlaylistTracks([]);
    // TODO add message rather than alert('[' + text + '] playlist created!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span className="pink">mmm</span>ing</h1>
      </header>
      <main>
        {userName ? (
          <>
            <button id="logout-button" onClick={logoutClick}>
              {userImageUrl && <img className="user-icon" src={userImageUrl} alt={userName} />}
              {userName + " Logout"}
            </button>
            <SearchBar onSearch={search} />
            <div className="row">
                <SearchResults 
                  searchTracks={searchTracks} 
                  onAdd={addTrack} />
                <Playlist 
                  playlistTracks={playlistTracks} 
                  playlistName={playlistName} 
                  onNameChange={setPlaylistName} 
                  onSave={savePlaylist} 
                  onRemove={removeTrack} />
            </div>
          </>
        ) : (
          <button id="login-button" onClick={loginWithSpotifyClick}>
            Login with Spotify
          </button>
          )}
      </main>
      <footer>
        Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>
  );
};

export default App;