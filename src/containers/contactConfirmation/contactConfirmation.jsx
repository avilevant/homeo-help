import React from 'react';
import './contactConfirmation.css';
import ConfirmationLogo1 from '../../images/Asset 62.png';
import { BigButtonBlue } from '../../componenets/buttons/buttons';
import Video from '../../componenets/video/video';

const ContactConfirmation = (props)=>(
    <div>
    
    <div className='topOrderConfirmation'>
   
    <h2>תודה, פנייתך התקבלה</h2>
    <p>
    אנחנו נחזור אליך בהקדם האפשרי
    </p>
    <img src={ConfirmationLogo1} alt="ConfirmationLogo" className='ConfirmationLogo1' />
    </div>
    <div>
    <p className='pOrder'>הסבר קצר על הומאופתיה</p>
    <div className='remedyHowTo'>
    <Video videoId={"XsnABbOCjtQ"} />
    </div>
    </div>
    <BigButtonBlue buttonName={'חזרה למסך ראשי'} route={()=>{props.history.push('/')}}/>
    </div>
)

export default ContactConfirmation;