import React from 'react';
import './useApp.css';
import Video from '../../componenets/video/video';
import { BigButtonBlue } from '../../componenets/buttons/buttons';
import { withRouter } from 'react-router-dom';

const UseApp =(props)=>(
<div className='useAppVideoBuild'>
<div className='useAppVideo'>
<h1 className='useApp'>סרטון הסבר כיצד להתקין אפליקציה במכשיר אנדרואיד</h1>
<Video videoId={'kUsqZ9NYB2Y'} />
<h1 className='useApp'>סרטון הסבר כיצד להתקין אפליקציה במכשיר אייפון</h1>
<Video videoId={'WPutbst7O7k'} />
<h1 className='useApp'>הסרטון מציג את האפשרויות והשימוש באפליקציה</h1>
<Video videoId={'XUEq8_uAB6Y'} />
</div>
<div className='useAppText'>
<h2 className='useAppTextSmall'>טיפול במגוון מצבי עזרה ראשונה, עם תזונה ותוספים, תרופות סבתא, ותרופות הומאופתיות</h2>
<h2 className='useAppTextSmall'>השוואה של מספר תרופות הומאופתיות לכל מצב, עם מאפיינים גופניים, נפשיים ויחודיים לכל תרופה לטיפול במצב הנוכחי</h2>
<h2 className='useAppTextSmall'>סרטוני וידאו אינפורמטייבים במגוון תחומים</h2>
<h2 className='useAppTextSmall'>הזמנת תרופות הומאופתיות ישירות מהאפליקציה</h2>
<h2 className='useAppTextSmall'>הזמנת ערכת עזרה ראשונה הומאופתית</h2>
<h2 className='useAppTextSmall'>ועוד...</h2>
</div>

<BigButtonBlue buttonName='לתפריט הראשי' route={()=>props.history.push('/')}/>
</div>
)

export default withRouter(UseApp);
