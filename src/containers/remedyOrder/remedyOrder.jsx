import React from 'react';
import './remedyOrder.css';
import OrderFrame from '../../componenets/UI/orderFrame/orderFrame';
import packageLogo from '../../images/Asset 36.png';
import { SmallButton } from '../../componenets/buttons/buttons';
import Cookies from 'js-cookie';
import OrderForm from '../../componenets/orderForm/orderForm';
import {withRouter } from 'react-router-dom';



class RemedyOrder extends React.Component{
    constructor(){
        super()

        let RemedyName = Cookies.getJSON('RemedyName')
        let price = Cookies.getJSON('price')

        this.state={
            firstOrder:RemedyName,
            finalOrder:'',
            kitPrice:price,
            showKitInfo:'kit'
        }
    }

    componentDidMount=()=>{
        if(this.state.kitPrice!==50){
            console.log(this.state.kitPrice)
           this.setState({showKitInfo:'kitBannerHide'})
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
            <p className='pfix extraColor'><span className='kitPrice'>{this.state.kitPrice}</span> <span className='kitPrice'>ש"ח</span> כולל מע"מ</p>
            </div>
            </div>
            <div  className={this.state.showKitInfo}>   
            
            <h6 className='kitHeader'>ערכת עזרה ראשונה</h6>
            
            <div>
            <div className='price_banner'>
            <img src={packageLogo} alt='package' className='packageLogo' />
            <p className='extraInfo extraColor'>   מכילה 10 סוגי רמדי שונים למירב המצבים היומיומיים</p>
            
            </div>
            <div className='price_banner'>
            <p  className='pfix extraColor'><span className='kitPrice'>320</span> <span className='kitPrice'>ש"ח</span> כולל מע"מ</p>
           
            <button className='kitOrderButton ' onClick={()=>this.props.history.push('/KitInfo')} >למידע נוסף</button>
            </div>
            </div>
            </div>
            
            <OrderForm RemedyName={this.state.firstOrder} confirmation='order'/>
            </OrderFrame>
            <SmallButton buttonName={"חזרה"} route={()=>{this.props.history.goBack()}}/>
            </div>
            
        )
    }
}

export default withRouter(RemedyOrder);