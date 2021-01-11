import React from 'react';
import YouTube from 'react-youtube';

const Video = (props)=>{
    const opts = {
        height: '200px',
        width: '100%'
       
        }

  return ( 
    <div>
    <YouTube videoId="wI5fS0O6TrE" opts={opts} />
    
    </div>)
}

export default Video;
