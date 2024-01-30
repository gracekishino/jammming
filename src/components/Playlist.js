import Tracklist from './Tracklist';
import styles from '../styles/Playlist.module.css'; 

function Playlist({ playlistTracks, playlistName, onNameChange, onSave, onRemove }) {

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

    return (
      <div className="column">
        <h2>Make Spotify Playlist</h2>
        <input 
            id="playlistNameInput"
            type="text" 
            placeholder='Playlist Name' 
            className={styles.playlistName}
            onChange={handleNameChange}
            value={playlistName} />
        <button onClick={onSave}>Save</button>
        <Tracklist action="-" tracks={playlistTracks} onRemove={onRemove} />
      </div>
    );
};

export default Playlist;