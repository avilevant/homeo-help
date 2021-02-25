import React from 'react';
import './drawerToggle.css';

const DrawerToggle =(props)=>{

    let topLine,centerLine,bottomLine   

    if(props.open){
        topLine='topLine topLine_open';
        centerLine='centerLine centerLine_open';
        bottomLine='bottomLine bottomLine_open';
    }
    else{
        topLine='topLine';
        centerLine='centerLine';
        bottomLine='bottomLine';
    }


    return(

        <div className='DrawerToggle'  onClick={props.clicked}>
            <div className={topLine}></div>
            <div className={centerLine}></div>
            <div className={bottomLine}></div>
        </div>
    )

}


export default DrawerToggle;