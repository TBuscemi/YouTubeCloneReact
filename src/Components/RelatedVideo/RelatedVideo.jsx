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
        src={'https://www.googleapis.com/youtube/v3/search?relatedToVideoId='+{video}+'&type=video&key=AIzaSyDs-up5MDmxBJK_Rrkw_l8sicAkHOgYpk4'}
        frameBorder="0"></iframe></ul>
      })}
    </div>
  );
}
export default RelatedVideos


// i think this needs to be here
// https://www.googleapis.com/youtube/v3/search?relatedToVideoId={videos}&type=video&key=AIzaSyDs-up5MDmxBJK_Rrkw_l8sicAkHOgYpk4