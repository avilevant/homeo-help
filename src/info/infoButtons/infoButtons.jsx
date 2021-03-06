import React from 'react';
import './infoButtons.css';
import imgA from '../../images/Asset 631.png';
import imgB from '../../images/Path 2075 (2).png';
import imgC from '../../images/Path 2077 (2).png';
import imgD from '../../images/Path 113 (3).png';
import imgE from '../../images/Asset 63.png';


const InfoButton =(props)=>{

const  tabClicked = (x)=>{
    props.changeTab1(x)
   
}   



return(

   
    
<div className='infoButtons'>

<button className={props.class} onClick={()=>tabClicked('5')}>
<img src={imgE} alt='img' className='infoImg'/>
מידע כללי
</button>    

<button className='infobutton'  onClick={()=>tabClicked('1')}>
<img src={imgA} alt='img' className='infoImg'/>
טיפול</button>

<button className='infobutton' onClick={()=>tabClicked('2')}>
<img src={imgB} alt='img' className='infoImg'/>
תזונה ותוספים</button>

<button className='infobutton' onClick={()=>tabClicked('3')}>
<img src={imgC} alt='img' className='infoImg'/>
תרופות סבתא</button>

<button className='infobutton' onClick={()=>tabClicked('4')}>
<img src={imgD} alt='img' className='infoImg'/>
טיפול הומאופתי
</button>   
</div>)
}
 export default InfoButton;
