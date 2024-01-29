
import { useState } from 'react';
import './styles/App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { loginWithSpotifyClick, logoutClick, userName, images, getTracks, createPlaylist, addTracksToPlaylist } from './util/Spotify';


function App() {

  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  
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
        <h1>Ja<span className="pink">mmm</span>ing</h1>
      </header>
      <main>
        {userName ? (
          <>
            <button id="login-button" onClick={logoutClick}>
              <img className="user-icon" src={images.length > 0 && images[0].url} alt={userName} />
              {userName + " Logout"}
            </button>
            <SearchBar getTracks={getTracks} setTracks={setTracks} />
            <div className="row">
              <div className="column">
                <SearchResults tracks={tracks} addTrack={addTrack} />
              </div>
              <div className="column">
                <Playlist 
                  playlist={playlist} 
                  setPlaylist={setPlaylist} 
                  createPlaylist={createPlaylist} 
                  removeTrack={removeTrack} 
                  addTracksToPlaylist={addTracksToPlaylist} />
              </div>
            </div>
          </>
        ) : (
          <button id="logout-button" onClick={loginWithSpotifyClick}>
            Login with Spotify
          </button>
          )}
      </main>
      <footer>
        Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>
  );
}

export default App;
