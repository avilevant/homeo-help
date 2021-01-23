import React from 'react';
import './infoSegment.css';
import closeIcon from '../../images/Path 1990.png';


const InfoSegment =(props)=>{

    let controlTabView=[ 'structure','closeTab']
    if(props.infoType){
        controlTabView =[ 'structure','showTab']
    }

    return(
        <div className={controlTabView.join(' ')}>
        <img src={closeIcon} alt='closeIcon' className='closeIcon' onClick={props.tabToggleHandler}/>
        <p className='inner-structure'>
        {props.infoType}
        </p>
        
        </div>
    )

}

export default InfoSegment;