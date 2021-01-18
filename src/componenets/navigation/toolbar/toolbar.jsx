import React from 'react';
import './toolbar.css';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import Logo from '../../../images/Asset 4.png';

const ToolBar =(props)=>(
    <header className='toolbar'>
    <img src={Logo} alt='logo' className='logo' />
        <DrawerToggle clicked={props.DrawerToggleClicked} />
        
        <nav className='DesktopOnly'>
           <NavigationItems/>
        </nav>
        
    </header>
);

export default ToolBar;