import React from 'react';
import './KitInfo.css';
import {MidButton, SmallButton} from '../../componenets/buttons/buttons';
import KitData from '../../info/kitData/kitData';



class KitInfo extends React.Component{

    constructor(){
        super()
        
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

    render(props){

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
            <SmallButton buttonName={"חזרה"} route={()=>{props.history.goBack()}}/>
            <MidButton buttonName={"הזמן"}/>
            </div>
        )
     
    }



}

export default KitInfo;
