import React from 'react';
import './remedyOrder.css';
import OrderFrame from '../../componenets/UI/orderFrame/orderFrame';
import packageLogo from '../../images/Asset 19.png';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';



class RemedyOrder extends React.Component{
    constructor(){
        super()

        let RemedyName = Cookies.getJSON('RemedyName')

        this.state={
            firstOrder:RemedyName,
            finalOrder:''
        }
    }


    render(){
        return(
            <div>
            <OrderFrame>
            <div className='price'>
            <div className='price1' >
            <p className='pfix'>שם המוצר</p>
            <p className='pfix kitPrice extraColor'>{this.state.firstOrder}</p>
            </div>
            <div className='price1'>
            <p className='pfix'>מחיר כולל משלוח לסניף</p>
            <p className='pfix extraColor'><span className='kitPrice'>50</span> <span className='kitPrice'>ש"ח</span> כולל מע"מ</p>
            </div>
            </div>
            <div  className='kit'>   
            
            <h6 className='kitHeader'>ערכת עזרה ראשונה</h6>
            
            <div>
            <div className='price'>
            <img src={packageLogo} alt='package' className='packageLogo' />
            <p className='extraInfo extraColor'>   מכילה 10 סוגי רמדי שונים למירב המצבים היומיומיים</p>
            
            </div>
            <div className='price'>
            <p  className='pfix extraColor'><span className='kitPrice'>320</span> <span className='kitPrice'>ש"ח</span> כולל מע"מ</p>
            <button className='kitOrderButton ' >הוספה להזמנה</button>
            </div>
            </div>
            </div>
            </OrderFrame>
            <button className='submitOrderButton' >שלח הזמנה</button>
            <Link to='/remedyCompare'>
            <button className='returnToCompareRemedyButton'>חזרה</button>
            </Link> 
            </div>
            
        )
    }
}

export default RemedyOrder;