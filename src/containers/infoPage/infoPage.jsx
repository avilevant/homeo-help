import React from 'react';
import './infoPage.css';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';
import IconButton from '../../componenets/iconButton/iconButton';
import RemedyCompButton from '../../componenets/remedyCompButton/remedyCompButton';
import InfoSegments from '../../info/infoSegments/infoSegments';
import InfoData from '../../info/infoData/infoData1';
import Cookies from 'js-cookie';
import AcuteList from '../../componenets/acuteList/acuteList';
class InfoPage extends React.Component{

  
  
  constructor(props){
    super()
   
    let n = Cookies.getJSON('buttonId').id
    n=n-1
    
    this.state = {
      videoId:InfoData[n].video,
      name:InfoData[n].name,
      basicInfo:InfoData[n].generalInfo,
      multiInfo:InfoData[n].firstAid,
      firstTabState:'active'
      


    }
    
    
    
  }
  

  
  

  changeTabInfo=(x)=>{
    let n = Cookies.getJSON('buttonId').id
    n=n-1
      switch(x){
          case '1':
          this.setState({multiInfo:InfoData[n].firstAid})
          break;
          case '2':
          this.setState({multiInfo:InfoData[n].nutrition, firstTabState:''})
          break;
          case '3':
          this.setState({multiInfo:InfoData[n].grandma, firstTabState:''})
          break;
          case '4':
          this.setState({multiInfo:InfoData[n].homeopathy, firstTabState:''})
          break;
        default:
          this.setState({multiInfo:InfoData[n].firstAid})
      }    
    
    
  }

  renderIcon(){
    let n = Cookies.getJSON('buttonId').id
    return AcuteList[n-1].icon
  }

  renderID(){
    let idn=Cookies.getJSON('buttonId').id
    return idn
  }

  render(){

    return ( 
    
    <div className='info'>
    <div className='videoLayout'>
    
    <Video videoId={this.state.videoId} />
    </div> 
    <div className='topLayout'>
    <div className='return_button'>
    
    
    </div>
    <div className='name1'>
    {this.state.name}
    </div>
    <IconButton icon={this.renderIcon()} id={this.renderID()}/>  
    
    </div>
    <InfoSegments basicInfo={this.state.basicInfo} multiInfo={this.state.multiInfo}
    changeTab={this.changeTabInfo} firstTabState={this.state.firstTabState} />
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