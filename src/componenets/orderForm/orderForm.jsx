import React from 'react';
import './orderForm.css';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';


export default function OrderForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
  
    return (
     
        
      <form onSubmit={handleSubmit(onSubmit)}>
      
      
        
        
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
       <textarea  rows = "5" cols = "60"  name="message" className='formInputBig' ref={register({ required: true })} ></textarea>
       </div>
       
        {errors.exampleRequired && <span>This field is required</span>}
        <Link to='/OrderConfirmation'>
        <input type="submit" value='הזמן עכשיו' className='inputOrderButton' />
        </Link>
      </form>
    );
  }