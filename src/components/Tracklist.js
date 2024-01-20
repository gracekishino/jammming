import Track from './Track';

function Tracklist({ addTrack, removeTrack, icon, tracks }) {
    return (
        <>
            {tracks?.map((track,key) => (
                <Track removeTrack={removeTrack} addTrack={addTrack} icon={icon} track={track} key={key} />
            ))}
        </>
    );
};

export default Tracklist;