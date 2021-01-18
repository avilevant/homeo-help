import React from 'react';
import {Link} from 'react-router-dom';
import './iconButton.css';
import Cookies from 'js-cookie';



const IconButton =({title,icon,id})=>{

    const showId=()=>{
       Cookies.set('buttonId',{id})
    }
    
    
    

    
    
    

    return(
        <div >
            <Link to='/infoPage'>
            
            <button className='IconButton' onClick={()=>showId()}>
            {icon}
            </button>
            </Link>
            
            <div className='name'>{title}</div>
        </div>
    )
}

export default IconButton;