import React from 'react';
import './buttons.css';


const BigButtonBlue=(props)=>(
<button className='BigButtonBlue' onClick={props.route}>{props.buttonName}</button>
)



const MidButton=(props)=>(
<button className='MidButton' onClick={props.route}>{props.buttonName}</button>
)


const SmallButton=(props)=>(
<button className='SmallButton' onClick={props.route}>{props.buttonName}</button>
)

export  {BigButtonBlue, MidButton, SmallButton};