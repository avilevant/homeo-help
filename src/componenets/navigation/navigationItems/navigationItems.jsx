import React from 'react';
import './navigationItems.css';

const NavigationItems =()=>(
    <ul className='navItems'>
        <li className='item'><a href='/' className='active'>abuot me</a></li>
        <li className='item'><a href='/' >how to use</a></li>
        <li className='item'><a href='/' >contact</a></li>
        <li className='item'><a href='/' >order a kit</a></li>
    </ul>
)

export default NavigationItems;