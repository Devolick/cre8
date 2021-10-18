import './Video.css';

function Video() {
  return <div className="video">
    <iframe className="video-frame" src="https://www.youtube.com/embed/wpC9V2wJ-mY" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  </div>;
}

export default Video;
