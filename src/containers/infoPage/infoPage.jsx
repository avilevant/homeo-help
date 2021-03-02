import React from 'react';
import './infoPage.css';
import Video from '../../componenets/video/video';
import {  MidButton, SmallButton} from '../../componenets/buttons/buttons';
import InfoButtons from '../../info/infoButtons/infoButtons';
import InfoData from '../../info/infoData/infoData1';
import Cookies from 'js-cookie';
import {withRouter } from 'react-router-dom';


class InfoPage extends React.Component{
 
  constructor(props){
    super(props)
   
    let n = Cookies.getJSON('buttonId').id
    n=n-1
    
    this.state = {
      videoId:InfoData[n].video,
      name:InfoData[n].name,
      firstButtonState:'activebutton',
      multiInfo:InfoData[n].generalInfo,
      currentId:n
    }
  }
  
 
  // tabToggleHandler =()=>{
  //   this.setState((prevState)=>{
  //     return{multiInfo:!prevState.multiInfo}
  //   })
  // }

  
  changeTabInfo=(x)=>{
    let n = this.state.currentId
    
      // switch(x){
      //     case '1':
      //     this.state.multiInfo === InfoData[n].firstAid ?
      //     this.tabToggleHandler() : 
      //     this.setState({multiInfo:InfoData[n].firstAid,firstButtonState:'infobutton' })
      //     break;
      //     case '2':
      //     this.state.multiInfo === InfoData[n].nutrition ?
      //     this.tabToggleHandler() :  
      //     this.setState({multiInfo:InfoData[n].nutrition,firstButtonState:'infobutton'})
      //     break;
      //     case '3':
      //     this.state.multiInfo === InfoData[n].grandma ?
      //     this.tabToggleHandler() :  
      //     this.setState({multiInfo:InfoData[n].grandma,firstButtonState:'infobutton'})
      //     break;
      //     case '4':
      //     this.state.multiInfo === InfoData[n].homeopathy ?
      //     this.tabToggleHandler() :
      //     this.setState({multiInfo:InfoData[n].homeopathy,firstButtonState:'infobutton'})
      //     break;
      //     case '5':
      //     this.state.multiInfo === InfoData[n].generalInfo ?
      //     this.tabToggleHandler() :
      //     this.setState({multiInfo:InfoData[n].generalInfo})
      //     break;
      //   default:
      //     this.setState({multiInfo:InfoData[n].firstAid})
      // }    
    
      switch(x){
        case '1':
        if(this.state.multiInfo !== InfoData[n].firstAid) 
        this.setState({multiInfo:InfoData[n].firstAid,firstButtonState:'infobutton' })
        break;
        case '2':
        if(this.state.multiInfo !== InfoData[n].nutrition) 
        this.setState({multiInfo:InfoData[n].nutrition,firstButtonState:'infobutton'})
        break;
        case '3':
        if(this.state.multiInfo !== InfoData[n].grandma)
        this.setState({multiInfo:InfoData[n].grandma,firstButtonState:'infobutton'})
        break;
        case '4':
        if(this.state.multiInfo !== InfoData[n].homeopathy) 
        this.setState({multiInfo:InfoData[n].homeopathy,firstButtonState:'infobutton'})
        break;
        case '5':
        if(this.state.multiInfo !== InfoData[n].generalInfo)
        this.setState({multiInfo:InfoData[n].generalInfo})
        break;
      default:
        this.setState({multiInfo:InfoData[n].firstAid})
    }   
    
  }


  render(){

    return ( 
    
    <div className='info'>
    <Video videoId={this.state.videoId} />
    <InfoButtons changeTab1={this.changeTabInfo}  tabToggleHandler={this.tabToggleHandler} class={this.state.firstButtonState}/>
    <div className='name1'>
    {this.state.name}
    </div>
    <div className='multiInfoPresent'>
    {this.state.multiInfo}      
    </div>
    
    <SmallButton buttonName={'חזרה'} route={()=>{this.props.history.goBack()}}/>
    <MidButton buttonName={'השוואת תרופות הומאופתיות'} route={()=>{this.props.history.push('/remedyCompare')}}/>
     
    
    </div>
    )}

}


export default withRouter(InfoPage);