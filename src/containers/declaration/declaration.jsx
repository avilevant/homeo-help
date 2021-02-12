import React from 'react';
import './declaration.css';
import disclaimerImg from '../../images/Asset 41.png';
import {BigButtonBlue} from '../../componenets/buttons/buttons';

const Declaration = (props) =>(
    <div className='declaration'>
    
    
    <h1 className='declarationHeader'>הצהרת שימוש ואי אחריות</h1>
    <h1 className='declarationText'>השימוש באפליקציה זו , ובמידע שהיא מכילה, היא על אחריות המשתמש בלבד ואינה באה להחליף ייעוץ וטיפול אישי מקצועי על ידי רופא או בעל מקצוע מנוסה ומוסמך. כל המידע   המוצג הוא פרי ניסיונו והידע של אבי לבנט כהומאופת ומומחה בתחום הרפואה הטבעית.הניתן כשירות והמלצה כללית לטיפול טבעי במצבים שונים של עזרה ראשונה ומצבי חירום. </h1>
    <h1 className='declarationFooter'>תהנו ותשתמשו באפליקציה ובמידע שבה באופן שקול וזהיר, ובהקדם פנו לקבלת ייעוץ ועזרה רפואית מקצועית.</h1>
    <img src={disclaimerImg} alt="disclaimerImg" className='disclaimerImg'/>
    <BigButtonBlue buttonName={"לתפריט הראשי"} route={()=>{props.history.push('/')}}/>
    </div>
)

export default Declaration;