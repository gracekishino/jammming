import Track from './Track';

function Tracklist({ onAdd, onRemove, action, tracks }) {
    return (
        <div>
            {tracks.map((track) => (
                <Track 
                    onRemove={onRemove} 
                    onAdd={onAdd} 
                    action={action} 
                    track={track} 
                    key={track.id} />
            ))}
        </div>
    );
};

export default Tracklist;