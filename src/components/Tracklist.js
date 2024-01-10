import Track from './Track';

function Tracklist({ action, tracks }) {
    return (
        <>
            {tracks?.map((track) => (
                <Track action={action} track={track} />
            ))}
        </>
    );
};

export default Tracklist;