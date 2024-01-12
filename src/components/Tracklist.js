import Track from './Track';

function Tracklist({ action, tracks }) {
    return (
        <>
            {tracks?.map((track,key) => (
                <Track action={action} track={track} key={key} />
            ))}
        </>
    );
};

export default Tracklist;