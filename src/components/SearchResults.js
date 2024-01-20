import Tracklist from './Tracklist';

function SearchResults({ tracks, addTrack }) {

    return (
        <div>
            <h2>Song Results</h2>
            <Tracklist tracks={tracks} addTrack={addTrack} icon="+" />
        </div>
    );
};

export default SearchResults;