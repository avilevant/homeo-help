import React from 'react';
import './remedyInfoDisplay.css';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';


const RemedyInfoDisplay = (props) =>{

    const showRemedyNAme=()=>{
        Cookies.set('RemedyName',props.RemedyName)
        console.log(props.RemedyName)
    }

    return(
    <div className='Remedy'>
    <div className='RemedyName'>
    <h2>{props.RemedyName}</h2>
    <Link to='/RemedyOrder'>
    <button className='orderButton' onClick={()=>(showRemedyNAme())}>הזמנה</button>
    </Link>
    </div>
    <div className='RemedyInfo' >
    <p>{props.Remedy_information} </p>
    </div>
    
    </div>

    )

}

    


export default RemedyInfoDisplay;


