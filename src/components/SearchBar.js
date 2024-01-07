import styles from '../styles/SearchBar.module.css'; 

function SearchBar() {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="searchText" id="searchText" placeholder="Search for songs" className={styles.searchText} />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>

        </div>
    );
};

export default SearchBar;