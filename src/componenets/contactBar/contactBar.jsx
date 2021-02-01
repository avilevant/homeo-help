import React from 'react';
import './contactBar.css';
import siteImg from '../../images/Asset 59.png';
import youTubeImg from '../../images/Asset 61.png';
import faceBookImg from '../../images/Path 1 (2).png';



const ContactBar = () =>(
    <div className='ContactBar'>
    <img src={faceBookImg} alt="faceBookImg" className='contactBarImg' onClick={()=>window.open("https://www.facebook.com/merkaz.levant")}/>
    <img src={youTubeImg} alt="youTubeImg" className='contactBarImg' onClick={()=>window.open("https://www.youtube.com/channel/UC21w07Iz5gHrNcyJ76nW57g")}/>
    <img src={siteImg} alt="siteImg" className='contactBarImg' onClick={()=>window.open("https://merkaz-levant.com/")}/>

    </div>
)

export default ContactBar;