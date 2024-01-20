import styles from '../styles/Track.module.css'; 

function Track({ icon, track, addTrack, removeTrack }) {
    const handleClick = () => {
        icon === '+' ? addTrack(track) : removeTrack(track.id)
    }
    
    return (
        <div className={styles.song}>
            <div className={styles.songInfo}>
                <div><b>{track.name}</b></div>
                <div>{track.artists?.name}</div>
            </div>
            <div className={styles.songAction}>
                <button onClick={handleClick} className={styles.icon}>{icon}</button>
            </div>
        </div>
    );
};

export default Track;