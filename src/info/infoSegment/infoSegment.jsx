import React from 'react';
import './infoSegment.css';


const InfoSegment =(props)=>{

    return(
        <div className='structure'>
        <p className='inner-structure'>
        {props.infoType}
        </p>
        
        </div>
    )

}

export default InfoSegment;