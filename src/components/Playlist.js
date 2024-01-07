import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 

function Playlist() {
    return (
        <form>
            <input type="text" placeholder='New Playlist Name' className={styles.playlistName} />
            <button>Save to Spotify</button>
            <Tracklist action="-" />
        </form>
    );
};

export default Playlist;