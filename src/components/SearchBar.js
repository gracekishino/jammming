function SearchBar() {
    return (
        <div>
            <form>
                <div>
                    <input type="text" name="searchText" id="searchText" placeholder="Search for songs" />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>

        </div>
    );
};

export default SearchBar;