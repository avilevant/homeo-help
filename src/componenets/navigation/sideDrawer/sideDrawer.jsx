import React from 'react';
import './sideDrawer.css';
import NavigationItems from '../navigationItems/navigationItems';
import BackDrop from '../../UI/backdrop/backdrop';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import SideLogo from '../../../images/Asset 4.png';

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
        <DrawerToggle clicked={props.DrawerToggleClicked} drawerOpen={props.open} />
        <img src={SideLogo} alt='logo' className='SideLogo' />
        <nav>
        <NavigationItems/>
        </nav>
        </div>
        </div>
    )
}

export default SideDrawer;