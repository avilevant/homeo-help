import React from 'react';
import './navigationItems.css';
import home from '../../../images/Asset 28.png';
import center from '../../../images/Asset 26.png';
import sets from '../../../images/Path 113 (2).png';
import contact from '../../../images/Path 2106 (2).png';
import disclaimer from '../../../images/Path 113 (2).png';
import video from '../../../images/Path 113 (2).png';

const NavigationItems =()=>(
    <ul className='navItems'>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >עמוד הבית</a></li>
        <li className='item'><img src={center} alt='home' className='sideDrawerIcon'/><a href='/' >מרכז לבנט</a></li>
        <li className='item'><img src={sets} alt='home' className='sideDrawerIcon'/><a href='/' >הזמנת ערכות</a></li>
        <li className='item'><img src={contact} alt='home' className='sideDrawerIcon'/><a href='/' >צור קשר</a></li>
        <li className='item'><img src={video} alt='home' className='sideDrawerIcon'/><a href='/' >ספריית וידאו</a></li>
        <li className='item'><img src={disclaimer} alt='home' className='sideDrawerIcon'/><a href='/' >אחריות מקצועית</a></li>
        
    </ul>
)

export default NavigationItems;