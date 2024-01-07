import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 

function Playlist() {
    return (
        <form>
            <h2>Create Playlist on Spotify</h2>
            <input type="text" placeholder='New Playlist Name' className={styles.playlistName} />
            <button>Save</button>
            <Tracklist action="-" />
        </form>
    );
};

export default Playlist;