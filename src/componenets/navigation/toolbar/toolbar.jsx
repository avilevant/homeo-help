import React from 'react';
import './toolbar.css';
import NavigationItems from '../navigationItems/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/drawerToggle';
import Logo from '../../../images/Asset 31.png';
import {Link} from 'react-router-dom';
import ShareImg from '../../../images/shutterstock_789106786 [Converted]-03.png';
import ShareRet from '../../shareCapacitor/shareCapacitor';





const ToolBar =(props)=>{

    const startShare =()=>{

            ShareRet()
        
    }
    
    


    return(
        <header className='toolbar'>
       
        <DrawerToggle clicked={props.DrawerToggleClicked} open={props.openDrawer}/>
       
        <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
        </Link>
        <img src={ShareImg} alt="ShareImg" className='ShareImg' onClick={()=>startShare()}/> 
          
            <nav className='DesktopOnly'>
               <NavigationItems/>
            </nav>
            
        </header>
    );

}


export default ToolBar;