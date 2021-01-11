import React from 'react';
import {Link} from 'react-router-dom';
import './iconButton.css';



const IconButton =({title,icon})=>{
    return(
        <div >
            <Link to='/infoPage'>
            
            <button className='IconButton'>
            {icon}
            </button>
            </Link>
            
            <div className='name'>{title}</div>
        </div>
    )
}

export default IconButton;