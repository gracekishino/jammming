import Track from './Track';

function Tracklist({ action}) {
    return (
        <>
            <Track action={action} />
            <Track action={action} />
            <Track action={action} />
        </>
    );
};

export default Tracklist;