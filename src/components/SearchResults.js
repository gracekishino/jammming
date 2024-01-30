import Tracklist from './Tracklist';

function SearchResults({ searchTracks, onAdd }) {

    return (
        <div className="column">
            <h2>Song Results</h2>
            <Tracklist tracks={searchTracks} onAdd={onAdd} action="+" />
        </div>
    );
};

export default SearchResults;