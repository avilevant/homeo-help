import React from 'react';
import './remedyCompare.css';
import {Link} from 'react-router-dom';
import RemedyInfoDisplay from '../../info/remedyInfoDisplay/remedyInfoDisplay';
import AllRemedyInfo from '../../info/infoRemedy/infoRemedy';
import Cookies from 'js-cookie';


class RemedyCompare extends React.Component{

    constructor(){
        super()
        
        this.state={
            displayType: '1',
            remedyIndex: 1,
            tabOnRender:'clicked'
        }

        
       
    }

    
    getInfoBySelector= (remedyData, selector) =>{

        
        switch (selector){
            case "1": return remedyData.physical;
            case "2": return remedyData.emotional;
            case "3": return remedyData.unique;
            default: return remedyData.physical;
        }
    }
    

    displayRemedyInfo=(x)=>{

        let n = Cookies.getJSON('buttonId').id
        n= n-1
        // this.setState({remedyIndex:n})

        //   let remedyInfo =AllRemedyInfo[this.state.remedyIndex];
        let remedyInfo =AllRemedyInfo[n];
   
           return(

            //let remedyInfo = InfoRemedyAll
            // InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
            //                 <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={this.state.displayedInformation}  /> )) 
            remedyInfo.map((e) => (
                <RemedyInfoDisplay  RemedyName={e.remedyName} 
                Remedy_information={this.getInfoBySelector(e, this.state.displayType)}/>)             
            )

            
           ) 
        }
        
     
           

        tabFirstopen=()=>{
          let firstOpen =''
          if(this.state.tabOnRender==='clicked'){
              firstOpen ='remedyFeatureButton active2'
          }else{
            firstOpen ='remedyFeatureButton'
          }
          return firstOpen
        }    
        

    

  
      
      
      
    

   


render(){
    return(
        <div className='remedy_compare'>
        
        <div className='remedy_options'>
        
        <p className='remedy_name'>שם הרמדי</p>   
        <button className={this.tabFirstopen()} onClick={()=>this.setState({displayType:'1'})} >מאפיינים פיזיים</button>
        <button className='remedyFeatureButton' onClick={()=>this.setState({displayType:'2',tabOnRender:''})} >מאפיינים רגשיים</button>
        <button className='remedyFeatureButton' onClick={()=>this.setState({displayType:'3',tabOnRender:''})} >מאפיינים יחודיים</button>
           
        
        
        </div>
        <div className='remedy_info'>
        
        {this.displayRemedyInfo()}
        </div>
        
        
    
        <Link to='/infoPage'>
        
        <button className='returnButton'>
        חזרה
        </button>
        </Link>
        
        </div>
       )
    


}

}

export default RemedyCompare;