import React from 'react'

const RelatedVideos = (props) => {
  
  return ( 
    <div>
      <h1>Related Videos</h1>
      <button onClick={() => console.log(props.videos)}>
      </button>
      <br />
      {props.videos.map((video) => {
        return <ul><iframe title="videoPlayer" id="ytplayer" type="text/html" width="160" height="90"
        src={`https://www.youtube.com/embed/${video}?autoplay=0&origin=http://example.com`}
        frameborder="0"></iframe></ul>
      })}
    </div>
  );
}
export default RelatedVideos
