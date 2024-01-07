import styles from '../styles/Track.module.css'; 

function Track({ action }) {
    return (
        <div className={styles.song}>
            <div className={styles.songInfo}>
                <div><b>Song Title</b></div>
                <div>Artist / Album</div>
            </div>
            <div className={styles.songAction}>
                <button className={styles.action}>{action}</button>
            </div>
        </div>
    );
};

export default Track;