
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
        <h1>Ja<span style={{color: "#ffccff"}}>mmm</span>ing</h1>
      </header>
      <main>
        
        <button id="login-button" onClick={userName ? logoutClick : loginWithSpotifyClick}>
          {images ? <img className="user-icon" src={images.length > 0 ? images[0].url : ""} alt={userName} /> : "" }
          {userName ? userName + " Logout" : "Login with Spotify"}
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
      </main>
      <footer>
        Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>
  );
}

export default App;
