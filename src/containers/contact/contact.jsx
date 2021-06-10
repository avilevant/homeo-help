import React from 'react';
import './contact.css';
import { SmallButton} from '../../componenets/buttons/buttons';
import {withRouter } from 'react-router-dom';
import ContactBar from '../../componenets/contactBar/contactBar';
import OrderForm from '../../componenets/orderForm/orderForm';



const Contact =(props)=>(
    <div className='contact'>   
    <div className='pageBuild'>
    <div className='contactStatement'>
    
    <h1 className='headerContact'>צור קשר</h1>
    <p className='headerText'>יש לכם שאלות, הערות או בקשות, אתם יכולים לפנות אלינו באמצעות טופס צור קשר, ונענה לכם בהקדם האפשרי</p>
    </div>
    <ContactBar/>
    <div className='conatcForm'>
    <OrderForm confirmation='contact'/>
    </div>
    <SmallButton buttonName={'חזרה'} route={()=>{props.history.goBack()}}/>
    </div>
    </div>
)

export default withRouter(Contact);