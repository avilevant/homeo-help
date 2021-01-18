import React from 'react';
import './remedyCompare.css';
import RemedyInfoButton from '../../componenets/remedyInfoButton/remedyInfoButton';
import {Link} from 'react-router-dom';
import RemedyInfoDisplay from '../../info/remedyInfoDisplay/remedyInfoDisplay';
import InfoRemedy1 from '../../info/infoRemedy/infoRemedy';


class RemedyCompare extends React.Component{

    constructor(){
        super()
        let i=0
        this.state={
            displayedInformation:InfoRemedy1[0].physical,
            // displayMarker:'1'
        }

        
       
    }

    

    

    displayRemedyInfo=(x)=>{
        // if(x==='2'){
        //     console.log('2')
        //     return(
                
        //         InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //             <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={emotional} test={'two'} /> )) 
        //     )
        // }else if(x==='3'){
        //     console.log('3')
        //     return(
        //         InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //             <RemedyInfoDisplay  Remedy_information={unique}  test={'three'}/> )) 
        //     )
        // }else{
        //     console.log('1')
        //     return(
        //         InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //             <RemedyInfoDisplay   Remedy_information={physical} test={'one'} /> )) 
        //     ) 
        // }


        // for(let i=0; i<InfoRemedy1.length; i++){
        //     return(

        //         <RemedyInfoDisplay  RemedyName={InfoRemedy1[i].remedyName} Remedy_information={this.state.displayedInformation}  />
        //     )
           return(
            InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
                            <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={this.state.displayedInformation}  /> )) 
           ) 
        }
        
        // switch(x){
        //     case '1':
        //         console.log('1')
                
        //             InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //                 <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={physical}  /> ))       

        //     break;
        //     case '2':
        //         console.log('2')
                
        //             InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //                 <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={emotional}  /> ))    
        //     // this.setState({displayedInformation:'emotional'})
        //     // this.displayRemedyInfo()
        //     break;
        //     case '3':
        //         console.log('3')
        //         InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //             <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={unique}  /> ))
                
        //     // this.setState({displayedInformation:'unique'})
        //     // this.displayRemedyInfo()
        //     break;
        //     default:
        //         InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
        //             <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={physical}  /> ))
        //     // this.setState({displayedInformation:'physical'})
        //     // this.displayRemedyInfo()
        // }

        // console.log(InfoRemedy1.physical)
        
          
                // return(
                //         InfoRemedy1.map(({remedyName})=>(
                //             <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={testing}  /> )))
           

            
        

    // return(
    //     InfoRemedy1.map(({remedyName,physical,emotional,unique})=>(
    //         <RemedyInfoDisplay  RemedyName={remedyName} Remedy_information={emotional}  /> )))    
    

    changeRemedyInfo=(x)=>{
        console.log('clickedr')
        let i=0
        switch(x){
            case '1':
                console.log('1')

            // while(i<InfoRemedy1.length){

            //     this.setState({displayedInformation:InfoRemedy1[i].physical})
            //     this.displayRemedyInfo()
            //     i++
            //     console.log(this.state.displayedInformation)
            //     console.log(i)
            // }

                   

               
            // this.displayRemedyInfo()
            break;
            case '2':
                console.log('2')
            this.setState({displayedInformation:InfoRemedy1[1].emotional})
            console.log(this.state.displayedInformation)
            // this.displayRemedyInfo()
            break;
            case '3':
                console.log('3')
            this.setState({displayedInformation:InfoRemedy1[1].unique})
            console.log(this.state.displayedInformation)
            // this.displayRemedyInfo()
            break;
            default:
            this.setState({displayedInformation:InfoRemedy1[1].physical})
            console.log(this.state.displayedInformation)
            // this.displayRemedyInfo()
        }
      
      
      
    }

    // componentDidMount(){

    //     this.setState({displayedInformation:InfoRemedy1.physical})
    // }


render(){
    return(
        <div className='remedy_compare'>
        
        <div className='remedy_options'>
        
        <p className='remedy_name'>שם הרמדי</p>   
        <button className='remedyFeatureButton' onClick={()=>this.changeRemedyInfo('1')} >מאפיינים פיזיים</button>
        <button className='remedyFeatureButton' onClick={()=>this.changeRemedyInfo('2')} >מאפיינים רגשיים</button>
        <button className='remedyFeatureButton' onClick={()=>this.changeRemedyInfo('3')} >מאפיינים יחודיים</button>
           
        
        
        </div>
        <div className='remedy_info'>
        
        {this.displayRemedyInfo()}
        </div>
        
        
    
        <Link to='/infoPage'>
        
        <button className='returnButton'>
        back
        </button>
        </Link>
        
        </div>
       )
    


}

}

export default RemedyCompare;