import React from 'react';
import './orderConfirmation.css';
import OrderFrame from '../../componenets/UI/orderFrame/orderFrame';
import ConfirmationLogo from '../../images/Checkbox.png';
import { BigButtonBlue } from '../../componenets/buttons/buttons';
import Video from '../../componenets/video/video';
import {withRouter } from 'react-router-dom';



const OrderConfirmation = (props)=>(
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
    <BigButtonBlue   buttonName={"חזרה למסך ראשי"} route={()=>{props.history.push('/')}}/>
    </div>
)

export default withRouter(OrderConfirmation);