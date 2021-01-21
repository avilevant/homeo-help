import React from 'react';
import './remedyInfoDisplay.css';

const RemedyInfoDisplay = (props) =>(

    <div className='Remedy'>
    

    <div className='RemedyName'>
    <h1>{props.RemedyName}</h1>
    <button className='orderButton'>הזמנה</button>
    </div>
    <div className='RemedyInfo' >
    <p>{props.Remedy_information} </p>
    </div>
    
    </div>
)

export default RemedyInfoDisplay;


