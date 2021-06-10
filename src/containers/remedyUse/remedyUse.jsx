import React from 'react';
import './remedyUse.css';
import Video from '../../componenets/video/video';
import {MidButton, SmallButton} from '../../componenets/buttons/buttons';
import {withRouter } from 'react-router-dom';



const RemedyUse =(props)=>(
    <div className='remedyUse'>
    <Video videoId={'BKPkAKqDhc8'}/>
    <h1 className='remedyUserHeader'>
    דגשים חשובים לשימוש בתרופות הומאופתיות    </h1>

    <h2 className='remedyUserText1'>את התכשיר ההומאופתי יש לאחסן במקום שבו אין חשיפה לשום סוג של קרינה אשר גורמת לפירוק היעילות של התרופה ההומאופתית.
    קופסאות פח, או מתכת אחרת, כמו של שוקולד יתנו הגנה מסוג זה.
    ובמידה ואין לכם, אז ניתן לעטוף היטב בנייר כסף, אלומיניום, כזה שלכולנו יש במטבח.</h2>
    <h2 className='remedyUserText1'>
    מקום האחסון הטוב ביותר, הוא מגירה של גרביים או תחתונים בארון. כך זה נשמר הכי טוב, והסיכוי שהרמדי ההומאופתי יתקלקל, הוא נמוך בהרבה.
    עוד נקודה חשובה בעניין זה, כאשר אתם אוספים את הרמדי ההומאופתי מבית המרקחת. תבקשו שיעטפו לכם בנייר כסף, ותקפידו לשים את הרמדי בנפרד מהסלולארי – שימו לב, לא לשים את שניהם יחד בתיק. אחרת, מלבד סוכריות טעימות, לא תהיה השפעה רבה.</h2>
    <h2 className='remedyUserText2'>
    מבחינת זמני הלקיחה של הרמדי, להקפיד על מרווח של חצי שעה לפחות מאוכל, זאת אומרת גם לפני וגם אחרי אוכל, לפחות חצי שעה.
    גם מצחצוח שיניים מומלץ לשמור על מרווח של חצי שעה כמו מאוכל, מאחר ומנטה מנטרל את ההשפעה של התרופה ההומאופתית, כמו גם קפאין, שכדאי לצמצם משמעותית או להימנע בכלל במידה ואפשר.</h2>

    <MidButton buttonName={"צור קשר"} route={()=>{props.history.push('/contact')}}/>
    <SmallButton buttonName={"חזרה"} route={()=>{props.history.goBack()}}/>
    </div>
)

export default withRouter(RemedyUse);