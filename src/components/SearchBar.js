import styles from '../styles/SearchBar.module.css'; 
import { useState } from 'react';

function SearchBar({ getTracks, setTracks }) {

  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // only search if text has been entered
    if (text.length > 0) {
      const jsonResponse = await getTracks(text);
      const searchResults = await jsonResponse.tracks.items;
      setTracks(searchResults);
    }
  }

    return (
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            name="searchText" 
            id="searchText" 
            value={text}
            placeholder="Search for songs" 
            arai-label="Search for songs" 
            onChange={handleTextChange}
            className={styles.searchText} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;