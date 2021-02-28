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

// const Video = (props)=>(
//     <div className='video'>
    
//     <ReactPlayer
//     url={'https://youtu.be/HLAZoRTAmIM'}
//     width='100%'
//     height='120%'
//     // light='true'
//     showinfo='0'
//     config={{
//       youtube: {
//         playerVars: { showinfo: 0,
//         light:true }
//       }
      
//     }}
//   />
//     </div>
// )   

export default Video;
