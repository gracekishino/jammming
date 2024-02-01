import styles from '../styles/SearchBar.module.css'; 
import { useState } from 'react';

function SearchBar({ onSearch }) {

  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const doSearch = () => {
    // only search if text has been entered
    if (query.length > 0) {
      onSearch(query);
    }
  }

  return (
    <div>
        <input 
          placeholder="Search for songs" 
          aria-label="Search for songs" 
          onChange={handleQueryChange}
          className={styles.searchText} />
        <button onClick={doSearch}>Search</button>
    </div>
  );
};

export default SearchBar;