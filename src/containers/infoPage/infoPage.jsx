import React from 'react';
import './infoPage.css';
import {Link} from 'react-router-dom'
import YouTube from 'react-youtube';

const InfoPage =()=>{
    const opts = {
        height: '200px',
        width: '100%'
       
        }

  return ( <div>
    
    <h1>info page</h1>
    <div className='video'>
    <YouTube videoId="wI5fS0O6TrE" opts={opts} />
    </div>
    <Link to='/'>
    
    <button>go back</button>
    </Link>
    </div>)
}



export default InfoPage;