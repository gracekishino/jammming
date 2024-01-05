import Tracklist from './Tracklist';
// import styles from './styles/Playlist.module.css'; 

function Playlist() {
    return (
        <div>
            <h2>Playlist</h2>
            <Tracklist />
            <button>Save to Spotify</button>
        </div>
    );
};

export default Playlist;