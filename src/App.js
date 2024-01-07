import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span style={{color: "#ffccff"}}>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar />
        <div className="row">
          <div className="column">
            <SearchResults />
          </div>
          <div className="column">
            <Playlist />
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
