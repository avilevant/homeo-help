import React from 'react';
import './remedyInfoDisplay.css';

const RemedyInfoDisplay = (props) =>(

    <div className='Remedy'>
    

    <div className='RemedyName'>
    <h2>{props.RemedyName}</h2>
    <button className='orderButton'>הזמנה</button>
    </div>
    <div className='RemedyInfo' >
    <p>{props.Remedy_information} </p>
    </div>
    
    </div>
)

export default RemedyInfoDisplay;


