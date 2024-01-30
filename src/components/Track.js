import styles from '../styles/Track.module.css'; 

function Track({ action, track, onAdd, onRemove }) {
    const handleClick = () => {
        action === '+' ? onAdd(track) : onRemove(track.id)
    }
    
    return (
        <div className={styles.song}>
            <div className={styles.songInfo}>
                <div><b>{track.name}</b></div>
                <div>{track.artists[0].name}</div>
            </div>
            <div className={styles.songAction}>
                <button onClick={handleClick} className={styles.icon}>{action}</button>
            </div>
        </div>
    );
};

export default Track;