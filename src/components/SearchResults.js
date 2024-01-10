import Tracklist from './Tracklist';

function SearchResults({ tracks }) {
    return (
        <div>
            <h2>Song Results</h2>
            <Tracklist tracks={tracks} action="+" />
        </div>
    );
};

export default SearchResults;