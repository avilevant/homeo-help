import React from 'react';
import './orderFrame.css';


const Orderframe =(props)=>(
    <div className='backdropChange'>   
    <div className='frame'>
    <div className='remedyOrderGeneralText'>
    <p className='remedyOrderHeader'>הזמנת רמדי</p>
    <p className='pfix'>התכשיר ההומאופתי מיוצר במעבדות הומאופתיות והמחיר כולל משלוח</p>
    </div>
    <main className='orderContent'>
    {props.children}
    </main>
    </div>
    </div>
)

export default Orderframe;