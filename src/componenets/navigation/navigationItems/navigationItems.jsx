import React from 'react';
import './navigationItems.css';
import home from '../../../images/Asset 22.png'

const NavigationItems =()=>(
    <ul className='navItems'>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >עמוד הבית</a></li>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >מרכז לבנט</a></li>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >הזמנת ערכות</a></li>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >צור קשר</a></li>
        <li className='item'><img src={home} alt='home' className='sideDrawerIcon'/><a href='/' >אחריות מקצועית</a></li>
        
    </ul>
)

export default NavigationItems;