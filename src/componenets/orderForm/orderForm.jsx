import React from 'react';
import './orderForm.css';
import { useForm } from "react-hook-form";
import {withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';


function OrderForm( props) {
    
    const { register,  errors } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit= (e)=>{
      e.preventDefault();
      
    
    emailjs.sendForm('service_1nr15xj', 'template_f6i68aa', e.target, 'user_M5W6VetrUbw5etNkqIa8l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then(
        props.confirmation==='order'? props.history.push("/OrderConfirmation") : props.history.push("/ContactConfirmation")
      )
    }

    
  
    return (
     
        
      <form onSubmit={onSubmit}>  
        
       <label htmlFor="" className='formName' required>שם מלא </label>
       <div>
       <input type='text' name="name" ref={register({ required: true })} className='formInput'/>
       </div>
       <label htmlFor="" className='formName'>אימייל</label>
       <div>
       <input type='email' name="email" className='formInput' required ref={register({ required: true })} />
       </div>
       <label htmlFor="" className='formName'>נייד</label>
       <div>
       <input type='tel' pattern="^\d{10}$" name="mobileNumber" className='formInput' required ref={register({ required: true })} />
       </div>
       <label htmlFor="" className='formName'>הערות</label>
       <div>

       <div>
       <input type='hidden' name="RemedyName" defaultValue={props.RemedyName} className='formInput' ref={register} />
       </div>
       
       <textarea  rows = "5" cols = "60"  name="message" className='formInputBig' ref={register} ></textarea>
       </div>
      
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value='שליחה' className='inputOrderButton' />
        
      </form>
    );
  }



  export default  withRouter(OrderForm)