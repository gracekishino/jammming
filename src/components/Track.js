import styles from '../styles/Track.module.css'; 

function Track({ action, track }) {
    return (
        <div className={styles.song}>
            <div className={styles.songInfo}>
                <div><b>{track.name}</b></div>
                <div>{track.artists?.name}</div>
            </div>
            <div className={styles.songAction}>
                <button className={styles.action}>{action}</button>
            </div>
        </div>
    );
};

export default Track;