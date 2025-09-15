import "./videoTitle.css"


const VideoTitle = ({title,overview}) =>{
    return<div className="title">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className="btn-container">
        <button>▶ Play</button>
        <button>More Info</button>
        </div>
    </div>
}

export default VideoTitle;