import React from 'react';
import './about.css';
import ContactBar from '../../componenets/contactBar/contactBar';
import logoImg from '../../images/Asset 62.png';
import PersonalImg from '../../images/IMG_0111_pp_v2-01.jpg'
import {  MidButton, SmallButton} from '../../componenets/buttons/buttons';
import {withRouter } from 'react-router-dom';



const About =(props)=>(
    <div>
    <div className='contactHeader'>
    <img src={logoImg} alt="logoImg" className='logoImgAbout'/>
    <img src={PersonalImg} alt="PersonalImg" className='PersonalImg'/>
    </div>
    <ContactBar/>
    <p className='aboutText'>אבי לבנט הוא הומאופת מוסמך ומומחה בתחום הרפואה הטבעית. בעל נסיון של למעלה מ 15 שנה ואלפי מטופלים, פותח עבורך את אפשרויות הגישה הטבעית לטיפול בעזרה ראשונה. כך שבתוך מגוון הכלים המוצע באפליקציה, כגון תזונה, תרופות טבעיות ותכשירים הומאופתיים - יימצא הפתרון עבורך ועבור היקרים לך, לתת מענה מהיר ויעיל במקרי חירום. </p>  
    <p className='aboutText1'>
    במרכז לבנט אנחנו מטפלים במגוון בעיות, בכל הגילאים. וניתן לקבל מידע נוסף ולהתרשם באתר ובערוץ היוטיוב. 
    </p>
    <MidButton buttonName={'צור קשר'} route={()=>{props.history.push('/contact')}}/>
    <SmallButton buttonName={'חזרה'} route={()=>{props.history.goBack()}}/>
    </div>
)

export default withRouter(About);