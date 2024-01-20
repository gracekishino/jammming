import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const tracks = [
    {
      id: "1",
      name: "Lofi",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "2",
      name: "Slow",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "3",
      name: "Home",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "4",
      name: "Chill",
      album: {name: "It's a Lofi"},
      artists: {name: "Domknowz"},
    },
    {
      id: "12345",
      name: "Let it Be",
      album: {name: "Let it Be"},
      artists: {name: "Beatles"},
    },
    {
      id: "12356",
      name: "Waterloo Sunset",
      album: {name: "Something Else"},
      artists: {name: "The Kinks"},
    },
    {
      id: "1234567",
      name: "(Sittin’ On) the Dock of the Bay",
      album: {name: "Let it Be"},
      artists: {name: "Otis Redding"},
    }
  ];


  const [playlist, setPlaylist] = useState([]);
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
        <SearchBar setSearchWords={setSearchWords} />
        <div className="row">
          <div className="column">
            <div>{searchWords.map(word => `"${word}" `)}</div>
            <SearchResults tracks={tracks} addTrack={addTrack} />
          </div>
          <div className="column">
            <Playlist playlist={playlist} setPlaylist={setPlaylist} removeTrack={removeTrack} />
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
