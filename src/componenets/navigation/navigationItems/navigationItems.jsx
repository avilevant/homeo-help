import React from 'react';
import './navigationItems.css';
import { Link } from 'react-router-dom';
import home from '../../../images/Asset 28.png';
import center from '../../../images/Asset 26.png';
import sets from '../../../images/Asset 39.png';
import contact from '../../../images/Path 2106 (2).png';
import disclaimer from '../../../images/baseline-gavel-24px (2).png';
import video from '../../../images/Path 700 (2).png';
import appImg from '../../../images/Asset 51.png';
import RemedyUse from '../../../images/Path 113 (2).png';


const NavigationItems =(props)=>{



    return(
        <ul className='navItems'>
        <li className='item' onClick={props.clicked}><img src={home} alt='home' className='sideDrawerIcon'/><Link to='/' >עמוד הבית</Link></li>
        <li className='item' onClick={props.clicked}><img src={center} alt='About' className='sideDrawerIcon'/><Link to='/About' >מרכז לבנט</Link></li>
        <li className='item' onClick={props.clicked}><img src={sets} alt='home' className='sideDrawerIcon'/><Link to='/KitInfo' >הזמנת ערכות</Link></li>
        <li className='item' onClick={props.clicked}><img src={contact} alt='Contact' className='sideDrawerIcon'/><Link to='/Contact' >צור קשר</Link></li>
        <li className='item' onClick={props.clicked}><img src={video} alt='VideoLibrary' className='sideDrawerIcon'/><Link to='/VideoLibrary' >ספריית וידאו</Link></li>
        <li className='item' onClick={props.clicked}><img src={disclaimer} alt='home' className='sideDrawerIcon'/><Link to='/Declaration' >הצהרת אי-אחריות</Link></li>
        <li className='item' onClick={props.clicked}><img src={RemedyUse} alt='home' className='sideDrawerIcon'/><Link to='/RemedyUse' > תרופה הומאופתית</Link></li>
        <li className='item' onClick={props.clicked}><img src={appImg} alt='home' className='sideDrawerIcon'/><Link to='/UseApp' > שימוש באפליקציה </Link></li>
        </ul>)
}

export default NavigationItems;