import React from 'react';
import './drawerToggle.css'
import hamburgerButton from '../../../../images/x_and_menu_icons-56.png'

const DrawerToggle =(props)=>{


    if(props.drawerOpen){
        return(

            <img src={hamburgerButton} alt='hamburgurButton' onClick={props.clicked} className='hamburger' />
        )
    }else{
        return(

            <div className='DrawerToggle'  onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}


export default DrawerToggle;