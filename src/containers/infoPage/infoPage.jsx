import React from 'react';
import './infoPage.css';
import {Link} from 'react-router-dom';
import Video from '../../componenets/video/video';
import IconButton from '../../componenets/iconButton/iconButton';
import RemedyCompButton from '../../componenets/remedyCompButton/remedyCompButton';
import InfoSegments from '../../info/infoSegments/infoSegments';
import InfoData from '../../info/infoData/infoData1';
import Cookies from 'js-cookie';

class InfoPage extends React.Component{

  
  
  constructor(props){
    super()
   
    let n = Cookies.getJSON('buttonId').id
    n=n-1
    
    this.state = {
      videoId:InfoData[n].video,
      Icon:'',
      basicInfo:InfoData[n].generalInfo,
      multiInfo:InfoData[n].firstAid

    }
    
    
    
  }
  

  
  

  changeTabInfo=(x)=>{
    
      switch(x){
          case '1':
          this.setState({multiInfo:InfoData[1].firstAid})
          break;
          case '2':
          this.setState({multiInfo:InfoData[1].nutrition})
          break;
          case '3':
          this.setState({multiInfo:InfoData[1].grandma})
          break;
          case '4':
          this.setState({multiInfo:InfoData[1].homeopathy})
          break;
        default:
          this.setState({multiInfo:InfoData[1].firstAid})
      }
    
    
    
  }

  render(){

    return ( <div className='info'>
      
    <Video videoId={this.state.videoId}/>
    <div className='topLayout'>
    <Link to='/'>
    <button>go back</button>
    </Link>
    <IconButton/>
    </div>
    <InfoSegments basicInfo={this.state.basicInfo} multiInfo={this.state.multiInfo} changeTab={this.changeTabInfo}/>
    <RemedyCompButton />
    </div>)
  }

}

// const InfoPage =(props)=>{
   
//   console.log('this is:'+props.id)
 
 
// }



export default InfoPage;