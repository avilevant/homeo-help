import React from 'react';
import  './mainPage.css';
// import IconButton from '../../componenets/iconButton/iconButton';
import MainButtonGrid from '../../componenets/mainButtondGrid/mainButtondGrid';

const MainPage = ()=>(
    <div className='mainPageColor'>
    <h1 className='firstHeader'>עזרה ראשונה</h1>
    <h1 className='secondHeader'> הומאופתיה ורפואה טבעית</h1>
    <MainButtonGrid/>
    </div>
)

export default MainPage;