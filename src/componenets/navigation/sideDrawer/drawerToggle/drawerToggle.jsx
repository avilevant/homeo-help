import React from 'react';
import './drawerToggle.css';

const DrawerToggle =(props)=>{

    // let topLine,centerLine,bottomLine   

    let DrawerToggle
    if(props.open){
        DrawerToggle ='menu-btn open'
        // topLine='topLine topLine_open';
        // centerLine='centerLine centerLine_open';
        // bottomLine='bottomLine bottomLine_open';
    }
    else{
        DrawerToggle ='menu-btn'        // topLine='topLine';
        // centerLine='centerLine';
        // bottomLine='bottomLine';
    }


    return(

        <div className={DrawerToggle}  onClick={props.clicked}>
            <div className="menu-btn__burger"></div>
        </div>
    )

}


export default DrawerToggle;