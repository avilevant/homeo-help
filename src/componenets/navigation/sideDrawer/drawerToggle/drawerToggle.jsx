import React from 'react';
import './drawerToggle.css';

const DrawerToggle =(props)=>{


    let DrawerToggle
    if(props.open){
        DrawerToggle ='menu-btn open'
    }
    else{
        DrawerToggle ='menu-btn'        
    }


    return(

        <div className={DrawerToggle}  onClick={props.clicked}>
            <div className="menu-btn__burger"></div>
        </div>
    )

}


export default DrawerToggle;