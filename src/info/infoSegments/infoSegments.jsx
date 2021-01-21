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
    
    <InfoSegment infoType={props.multiInfo} />
    <InfoButtons changeTab1={tabClicked1} firstTabState={props.firstTabState}/>
    </div>)
}



export default InfoSegments;