import React from 'react';
import './contactConfirmation.css';
import ConfirmationLogo1 from '../../images/Asset 62.png';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';

const ContactConfirmation = ()=>(
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
    <Link to='/'>
    <button className='returnHome'>חזרה למסך ראשי</button>
    </Link>
    </div>
)

export default ContactConfirmation;