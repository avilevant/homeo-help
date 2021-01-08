import React from 'react';
import './layout.css';
import ToolBar from '../navigation/toolbar/toolbar';

const layout =(props)=>(
    <div>
    <ToolBar/>
    <div>Toolbar,SideDrawer, Backdrop</div>
    <main className='content' >
    {props.children}
    </main>
    </div>
)

export default layout;