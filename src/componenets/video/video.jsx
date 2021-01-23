import React from 'react';
import YouTube from 'react-youtube';

const Video = (props)=>{
    const opts = {
        height: '150%',
        width: '100%'
       
        }

  return ( 
    <div className='video'>
    <YouTube videoId={props.videoId} opts={opts} />
    
    </div>)
}

export default Video;
