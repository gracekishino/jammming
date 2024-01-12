import styles from '../styles/SearchBar.module.css'; 
import { useState } from 'react';

function SearchBar({setSearchWords}) {

  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let searchArray = text?.split(" ").filter(i => i);
    if (text.indexOf(' ') >= 0) {
        text && searchArray.unshift(text);
    }
    setSearchWords(searchArray);
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