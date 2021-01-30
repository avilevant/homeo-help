import React from 'react';
import './shareButton.css';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
  } from "react-share";

  class Share extends React.Component {
    
    constructor(props){
      super(props)
      this.state ={
        show:false
    }
  
    // this.setState({show:this.props.share})

    }

    allowShare=()=>{
    this.setState((prevState)=>{
      return {show:!prevState.show}
    } )
  }  

  hideShare = ()=>{
 this.setState({show:false})
  }

    render(){
      
      const shareUrl = this.props.url
      let classShare;

      //*** include native share

      // if(this.state.show===true){
      //   if(navigator.canShare({url:shareUrl})){
      //               classShare = 'share'
      //               navigator.share({url:shareUrl})}
      //               else{
      //                 classShare = 'share share__op'
      //               }
      // }else{
      //   classShare = 'share'
      // }


      //*** remove native share for check 
      if(this.state.show===true){
        classShare = 'share share__op'           
      }else{
        classShare = 'share'
      }

      
      
        return(
          <div className={classShare}>
          
          <h1 className='headerText'>שלח את האפליקציה לחבר</h1>
              <div className="network">
              <WhatsappShareButton url={shareUrl} onClick={this.hideShare}>
                  <WhatsappIcon size={60} round />
              </WhatsappShareButton>
              </div>
  
            <div className="network">
              <FacebookShareButton url={shareUrl} onClick={this.hideShare}>
                <FacebookIcon size={60} round />
              </FacebookShareButton>
            </div>
    
    
            <div className="network">
              <LinkedinShareButton url={shareUrl} onClick={this.hideShare}>
                <LinkedinIcon size={60} round />
              </LinkedinShareButton>
            </div>
    
            
            <div className="network">
              <EmailShareButton url={shareUrl} onClick={this.hideShare}>
                <EmailIcon size={60} round />
              </EmailShareButton>
            </div>
            
          
          
          </div>
        )
    }
  }

  export default Share;