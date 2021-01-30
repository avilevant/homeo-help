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
      
      console.log('hello')
    emailjs.sendForm('service_1nr15xj', 'template_f6i68aa', e.target, 'user_M5W6VetrUbw5etNkqIa8l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then(
        props.history.push("/OrderConfirmation")
      )
    }

    
  
    return (
     
        
      <form onSubmit={onSubmit}>  
        
       <label htmlFor="" className='formName'>שם מלא </label>
       <div>
       <input type='text' name="name" ref={register({ required: true })} className='formInput'/>
       </div>
       <label htmlFor="" className='formName'>אימייל</label>
       <div>
       <input type='text' name="email" className='formInput' ref={register({ required: true })} />
       </div>
       <label htmlFor="" className='formName'>נייד</label>
       <div>
       <input type='tel' name="mobileNumber" className='formInput' ref={register({ required: true })} />
       </div>
       <label htmlFor="" className='formName'>הערות</label>
       <div>

       <div>
       <input type='hidden' name="RemedyName" defaultValue={props.RemedyName} className='formInput' ref={register} />
       </div>
       
       <textarea  rows = "5" cols = "60"  name="message" className='formInputBig' ref={register} ></textarea>
       </div>
      
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value='הזמן עכשיו' className='inputOrderButton' />
        
      </form>
    );
  }



  export default  withRouter(OrderForm)