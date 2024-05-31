import '/Users/madelinesimpson/ThemInUniform/client/src/SongCard.css';

export default function SongCard (props) {
    return (
        <>
            <div className="card">
                <a href={props.link} target="_blank" style={{color:"black",}}>
                    <img className="songcover" src={props.coverUrl} />
                    <h2 className="songtitle">{props.songtitle}</h2>
                 </a>
            </div>
        </>
    );
}