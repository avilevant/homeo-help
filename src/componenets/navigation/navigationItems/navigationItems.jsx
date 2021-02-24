import React from 'react';
import './navigationItems.css';
import home from '../../../images/Asset 28.png';
import center from '../../../images/Asset 26.png';
import sets from '../../../images/Asset 39.png';
import contact from '../../../images/Path 2106 (2).png';
import disclaimer from '../../../images/baseline-gavel-24px (2).png';
import video from '../../../images/Path 700 (2).png';
import appImg from '../../../images/Asset 51.png';
import RemedyUse from '../../../images/Path 113 (2).png';





const NavigationItems =()=>(
    <ul className='navItems'>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >עמוד הבית</a></li>
        <li className='item'><img src={center} alt='About' className='sideDrawerIcon'/><a href='/About' >מרכז לבנט</a></li>
        <li className='item'><img src={sets} alt='home' className='sideDrawerIcon'/><a href='/KitInfo' >הזמנת ערכות</a></li>
        <li className='item'><img src={contact} alt='Contact' className='sideDrawerIcon'/><a href='/Contact' >צור קשר</a></li>
        <li className='item'><img src={video} alt='VideoLibrary' className='sideDrawerIcon'/><a href='/VideoLibrary' >ספריית וידאו</a></li>
        <li className='item'><img src={disclaimer} alt='home' className='sideDrawerIcon'/><a href='/Declaration' >הצהרת אי-אחריות</a></li>
        <li className='item'><img src={RemedyUse} alt='home' className='sideDrawerIcon'/><a href='/RemedyUse' > תרופה הומאופתית</a></li>
        <li className='item'><img src={appImg} alt='home' className='sideDrawerIcon'/><a href='/RemedyUse' > שימוש באפליקציה </a></li>
        
    </ul>
)

export default NavigationItems;