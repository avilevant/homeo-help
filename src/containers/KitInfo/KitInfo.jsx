import React from 'react';
import './KitInfo.css';
import {MidButton, SmallButton} from '../../componenets/buttons/buttons';
import KitData from '../../info/kitData/kitData';
import {withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';




class KitInfo extends React.Component{

    constructor(props){
        super(props)
        
        this.state={
            display: KitData.general_info,
            activeButton:'active2'
        }

        
       
    }

    buttonStateOnEntry=()=>{
        return this.state.activeButton
    }

    KitInfoShow=(option)=>{

        switch(option){
            case "1": this.setState({display:KitData.general_info})
            break
            case "2": this.setState({display:KitData.content_info,activeButton:'kitFeatureButton' })
            break
            default: this.setState({display:KitData.general_info})
            break 
        }



    }

    orderInput=()=>{
        Cookies.set('RemedyName','ערכת עזרה ראשונה')
        Cookies.set('price','320')
        console.log('hello')

    }

    render(){

        return(
            <div className='kit_data'>
            <div className='kit_options'>
            <p className='kit_name'>פרטי הערכה</p>   
            <button className={this.buttonStateOnEntry()} onClick={()=>this.KitInfoShow("1")} >מידע על הערכה</button>
            <button className='kitFeatureButton' onClick={()=>this.KitInfoShow("2")} >תכולת הערכה</button>
            </div>
            <div className='kit_info'>
            {this.state.display}
            </div>
            <SmallButton buttonName={"חזרה"} route={()=>{this.props.history.goBack()}}/>
            <MidButton buttonName={"הזמן"} route={()=>{this.props.history.push('/RemedyOrder');this.orderInput()}} />
            </div>
        )
     
    }



}

export default withRouter(KitInfo);
