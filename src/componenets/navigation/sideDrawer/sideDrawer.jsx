import React from 'react';
import './sideDrawer.css';
import NavigationItems from '../navigationItems/navigationItems';
import BackDrop from '../../UI/backdrop/backdrop';


const SideDrawer = (props) =>{

    let controlSideDrawer = ['sideDrawer', 'close']
    if (props.open){
        controlSideDrawer = ['sideDrawer', 'open']
    }

    // {controlSideDrawer.join(' ')}

    return(
        <div>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={controlSideDrawer.join(' ')}>
        <nav>
        <NavigationItems/>
        </nav>
        </div>
        </div>
    )
}

export default SideDrawer;