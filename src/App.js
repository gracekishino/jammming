import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [playlist, setPlaylist] = useState([]);
  
  const searchTracks = [
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


  const [searchWords, setSearchWords] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span style={{color: "#ffccff"}}>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar setSearchWords={setSearchWords} />
        <div className="row">
          <div className="column">
            <SearchResults tracks={searchTracks} />
          </div>
          <div className="column">
            <Playlist playlist={playlist} setPlaylist={setPlaylist} />
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
