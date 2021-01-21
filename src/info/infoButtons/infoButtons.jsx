import React from 'react';
import './infoButtons.css';
import imgA from '../../images/Asset 5.png';
import imgB from '../../images/Path 2075.png';
import imgC from '../../images/Path 2077.png';
import imgD from '../../images/Path 113.png';

const InfoButton =(props)=>{

const  tabClicked = (x)=>{
    props.changeTab1(x)
   
}   

const classInfo=()=>{
    let firstOpen=''
    if(props.firstTabState==='active'){

         firstOpen ='infobutton active'
    }else{
         firstOpen ='infobutton'
    }
 return(
    firstOpen
 )
}

return(<div className='infoButtons'>
<button className={classInfo()}  onClick={()=>tabClicked('1')}>
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
