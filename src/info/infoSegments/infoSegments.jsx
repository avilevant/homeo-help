import React from 'react';
import InfoSegment from '../infoSegment/infoSegment'
import InfoButtons from '../infoButtons/infoButtons';
import './infoSegments.css';

const InfoSegments =(props)=>{

    const  tabClicked1 = (x)=>{
       
        props.changeTab(x)
        
    }  

return(
    <div className='infoarrange'>
    <div className='basicInfo'>
    {props.basicInfo}
    </div>
    
    <InfoSegment infoType={props.multiInfo} tabToggleHandler={props.tabToggleHandler} />
    <InfoButtons changeTab1={tabClicked1}  tabToggleHandler={props.tabToggleHandler}/>
    </div>)
}



export default InfoSegments;