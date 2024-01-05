import styles from '../styles/Track.module.css'; 

function Track() {
    return (
        <div className="row">
            <div className="column">
                <div>Song Title / Album</div>
                <div>Artist</div>
            </div>
            <div className="column">
                <button className={styles.add}>+</button>
            </div>
        </div>
    );
};

export default Track;