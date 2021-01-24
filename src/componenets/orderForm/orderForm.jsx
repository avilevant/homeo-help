import React from 'react';
import './orderForm.css';
import { useForm } from "react-hook-form";


export default function OrderForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
  
    return (
     
        
      <form onSubmit={handleSubmit(onSubmit)}>
      
      
        
        
       <label htmlFor="">שם מלא </label>
       <div>
       <input type='text' name="name" ref={register({ required: true })} />
       </div>
       <label htmlFor="">אימייל</label>
       <div>
       <input type='text' name="email" ref={register({ required: true })} />
       </div>
       <label htmlFor="">נייד</label>
       <div>
       <input type='tel' name="mobileNumber" ref={register({ required: true })} />
       </div>
       <label htmlFor="">הערות</label>
       <div>
       <input type='text' name="name" ref={register({ required: true })} />
       </div>
       
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
  }