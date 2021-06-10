import React from 'react';
import YouTube from 'react-youtube';
import './video.css';


const Video = (props)=>{
    const opts = {
        width: '100%',
        height:'200px'    
        }

  return ( 
    <div>
    <YouTube videoId={props.videoId} opts={opts} />
    
    </div>)
}

   

export default Video;
