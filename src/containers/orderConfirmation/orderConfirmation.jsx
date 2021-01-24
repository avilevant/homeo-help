import React from 'react';
import './orderConfirmation.css';
import OrderFrame from '../../componenets/UI/orderFrame/orderFrame';
import ConfirmationLogo from '../../images/Asset 19.png';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';


const OrderConfirmation = ()=>(
    <div>
    <OrderFrame>
    <div className='topOrderConfirmation'>
    <img src={ConfirmationLogo} alt="ConfirmationLogo" className='ConfirmationLogo' />
    <h2>הזמנתך התקבלה בהצלחה</h2>
    <p>
    תשלום ופרטי משלוח יגבו על ידי נציג טלפוני מרשת "סופרפארם תוך 48 שעות מקבלת ההזמנה"
    </p>
    </div>
    <div>
    <p className='pOrder'>סרטון הדרכה לשימוש ברמדי</p>
    <div className='remedyHowTo'>
    <Video videoId={"BKPkAKqDhc8"} />
    </div>
    </div>
    </OrderFrame>
    <Link to='/'>
    <button className='returnHome'>חזרה למסך ראשי</button>
    </Link>
    </div>
)

export default OrderConfirmation;