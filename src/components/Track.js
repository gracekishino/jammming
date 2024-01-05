import styles from '../styles/Track.module.css'; 

function Track({ action }) {
    return (
        <div className="row">
            <div className="column">
                <div>Song Title </div>
                <div>Artist / Album</div>
            </div>
            <div className="column">
                <button className={styles.action}>{action}</button>
            </div>
        </div>
    );
};

export default Track;