import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 

function Playlist() {
    return (
        <form>
            <h2>Make Spotify Playlist</h2>
            <input type="text" placeholder='Playlist Name' className={styles.playlistName} />
            <button>Save</button>
            <Tracklist action="-" />
        </form>
    );
};

export default Playlist;