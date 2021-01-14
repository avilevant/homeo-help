import React from 'react';
import './infoButtons.css';
import imgA from '../../images/Asset 5.png';
import imgB from '../../images/Path 2075.png';
import imgC from '../../images/Path 2077.png';
import imgD from '../../images/Path 113.png';

const InfoButton =()=>{

return(<div className='infoButtons'>
<button className='infobutton'>

<img src={imgD} alt='img' className='infoImg'/>
טיפול הומאופתי
</button>
<button className='infobutton'>
<img src={imgC} alt='img' className='infoImg'/>
תרופות סבתא</button>
<button className='infobutton'>
<img src={imgB} alt='img' className='infoImg'/>
תזונה ותוספים</button>
<button className='infobutton'>
<img src={imgA} alt='img' className='infoImg'/>
טיפול</button>


    
    </div>)
}
 export default InfoButton;
