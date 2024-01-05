import Tracklist from './Tracklist';
// import styles from '../styles/Playlist.module.css'; 

function Playlist() {
    return (
        <form>
            <input type="text" placeholder='New Playlist Name' />
            <Tracklist />
            <button>Save to Spotify</button>
        </form>
    );
};

export default Playlist;