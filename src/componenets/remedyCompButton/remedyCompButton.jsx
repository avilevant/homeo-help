import React from 'react';
import './remedyCompButton.css';
import {Link} from 'react-router-dom';


const RemedyCompButton = () =>(
    <Link to='/remedyCompare'>
            
            <button className='compareButton'>
            <p className='compButtonText'>השוואת תרופות הומאופתיות</p>
            </button>
         </Link>
);

export default RemedyCompButton;