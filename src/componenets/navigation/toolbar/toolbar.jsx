import React from 'react';
import './toolbar.css';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';

const ToolBar =(props)=>(
    <header className='toolbar'>
        <DrawerToggle clicked={props.DrawerToggleClicked} />
        <div>Logo</div>
        <nav className='DesktopOnly'>
           <NavigationItems/>
        </nav>
    </header>
);

export default ToolBar;