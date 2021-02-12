import React from 'react';
import YouTube from 'react-youtube';


const Video = (props)=>{
    const opts = {
        height: '160vh',
        width: '100%',
        
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            // autoplay: 1,
            // controls:0,
            
            

          },
       
        }

  return ( 
    <div className='video'>
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
