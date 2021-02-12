import React from 'react';
import './infoPage.css';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';
// import IconButton from '../../componenets/iconButton/iconButton';
import RemedyCompButton from '../../componenets/remedyCompButton/remedyCompButton';
import InfoSegments from '../../info/infoSegments/infoSegments';
import InfoData from '../../info/infoData/infoData1';
import Cookies from 'js-cookie';
// import AcuteList from '../../componenets/acuteList/acuteList';
class InfoPage extends React.Component{

  
  
  constructor(props){
    super()
   
    let n = Cookies.getJSON('buttonId').id
    n=n-1
    
    this.state = {
      videoId:InfoData[n].video,
      name:InfoData[n].name,
      basicInfo:InfoData[n].generalInfo,
      multiInfo:'',
      currentId:n
      


    }
    
    
    
  }
  

  tabToggleHandler =()=>{
    this.setState((prevState)=>{
      return{multiInfo:!prevState.multiInfo}
    })
  }

  
  

  changeTabInfo=(x)=>{
    let n = this.state.currentId
    
      switch(x){
          case '1':
          this.state.multiInfo === InfoData[n].firstAid ?
          this.tabToggleHandler() : 
          this.setState({multiInfo:InfoData[n].firstAid})
          break;
          case '2':
          this.state.multiInfo === InfoData[n].nutrition ?
          this.tabToggleHandler() :  
          this.setState({multiInfo:InfoData[n].nutrition})
          break;
          case '3':
          this.state.multiInfo === InfoData[n].grandma ?
          this.tabToggleHandler() :  
          this.setState({multiInfo:InfoData[n].grandma})
          break;
          case '4':
          this.state.multiInfo === InfoData[n].homeopathy ?
          this.tabToggleHandler() :
          this.setState({multiInfo:InfoData[n].homeopathy})
          break;
        default:
          this.setState({multiInfo:InfoData[n].firstAid})
      }    
    
    
  }

    

  render(){

    return ( 
    
    <div className='info'>
    <Video videoId={this.state.videoId} />
    <div className='name1'>
    {this.state.name}
    </div>
    <InfoSegments basicInfo={this.state.basicInfo} multiInfo={this.state.multiInfo}
    changeTab={this.changeTabInfo} tabToggleHandler={this.tabToggleHandler} />
    <div>
    <Link to='/'>
    <button className='infoPageReturn'><span>חזרה</span></button>
    </Link>
    <RemedyCompButton />
    </div> 
    </div>
    )}

}


export default InfoPage;