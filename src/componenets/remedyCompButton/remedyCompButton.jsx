import React from 'react';
import './remedyCompButton.css';
import {Link} from 'react-router-dom';


const RemedyCompButton = () =>(
    <Link to='/remedyComparison'>
            
            <button className='compareButton'>
            <p>Remedy Compare</p>
            </button>
         </Link>
);

export default RemedyCompButton;