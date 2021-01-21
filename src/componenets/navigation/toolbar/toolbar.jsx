import React from 'react';
import './toolbar.css';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import Logo from '../../../images/Asset 4.png';
import {Link} from 'react-router-dom';

const ToolBar =(props)=>(
    <header className='toolbar'>
    <DrawerToggle clicked={props.DrawerToggleClicked} />
    <Link to='/'>
    <img src={Logo} alt='logo' className='logo' />
    </Link>
        
        <nav className='DesktopOnly'>
           <NavigationItems/>
        </nav>
        
    </header>
);

export default ToolBar;