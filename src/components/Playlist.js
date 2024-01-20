import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 
import { useState } from 'react';

function Playlist({ playlist, removeTrack }) {

    const [text, setText] = useState('');
    const handleTextChange = (event) => {
      setText(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      // save new playlist name and tracks to playlist object
      // setPlaylist(playlist)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Make Spotify Playlist</h2>
            <input 
                type="text" 
                placeholder='Playlist Name' 
                className={styles.playlistName}
                onChange={handleTextChange}
                value={text} />
            <button>Save</button>
            <Tracklist icon="-" tracks={playlist} removeTrack={removeTrack} />
        </form>
    );
};

export default Playlist;