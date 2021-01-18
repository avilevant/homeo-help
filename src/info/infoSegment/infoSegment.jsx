import React from 'react';
import './infoSegment.css';


const InfoSegment =(props)=>{

    return(
        <div >
        <p className='structure'>
        {props.infoType}
        </p>
        
        </div>
    )

}

export default InfoSegment;