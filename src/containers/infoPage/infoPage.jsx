import React from 'react';
import './infoPage.css';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';
import IconButton from '../../componenets/iconButton/iconButton';
import RemedyCompButton from '../../componenets/remedyCompButton/remedyCompButton';
import InfoSegments from '../../info/infoSegments/infoSegments';

const InfoPage =()=>{
   

  return ( <div className='info'>
      
    <Video/>
    <div className='topLayout'>
    <Link to='/'>
    <button>go back</button>
    </Link>
    <IconButton/>
    </div>
    <InfoSegments/>
    <RemedyCompButton/>
    </div>)
}



export default InfoPage;