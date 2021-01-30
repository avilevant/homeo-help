import React from 'react';
import './toolbar.css';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import Logo from '../../../images/Asset 4.png';
import {Link} from 'react-router-dom';
import ShareImg from '../../../images/Asset 530.png';
import Share from '../../shareButton/shareButton';

const ToolBar =(props)=>{

    const startshare =()=>{
       
        if(navigator.canShare({url:'https://homeo-help.web.app/'})){
                    navigator.share({url:'https://homeo-help.web.app/'})}
                   
      
    }

    return(
        <header className='toolbar'>
        <Share/> 
        <DrawerToggle clicked={props.DrawerToggleClicked} />
       
        <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
        </Link>
        <img src={ShareImg} alt="ShareImg" className='ShareImg' onClick={()=>startshare()}/> 
          
            <nav className='DesktopOnly'>
               <NavigationItems/>
            </nav>
            
        </header>
    );

}


export default ToolBar;