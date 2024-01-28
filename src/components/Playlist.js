import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 
import { useState } from 'react';

function Playlist({ playlist, setPlaylist, removeTrack, createPlaylist, addTracksToPlaylist }) {

    const [text, setText] = useState('');
    const handleTextChange = (event) => {
      setText(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
    }

    const handleCreatePlaylist = async (event) => {
      // save new playlist name and tracks to playlist object
      const newPlaylist = await createPlaylist(text);
      setText('');
      setPlaylist([]);

      // save tracks to new playlist
      const uris = playlist?.map(track => track.uri);
      await addTracksToPlaylist(newPlaylist.id, uris);

      // TODO add message rather than alert('[' + text + '] playlist created!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Make Spotify Playlist</h2>
            <input 
                id="playlistName"
                type="text" 
                placeholder='Playlist Name' 
                className={styles.playlistName}
                onChange={handleTextChange}
                value={text} />
            <button onClick={handleCreatePlaylist}>Save</button>
            <Tracklist icon="-" tracks={playlist} removeTrack={removeTrack} />
        </form>
    );
};

export default Playlist;