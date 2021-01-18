import React from 'react';
import './remedyInfoDisplay.css';

const RemedyInfoDisplay = (props) =>(

    <div className='Remedy'>
    

    <div className='RemedyName'>
    <h1>{props.RemedyName}</h1>
    <button >order</button>
    </div>
    <p>{props.Remedy_information} </p>
    <p>{props.test}</p>
    </div>
)

export default RemedyInfoDisplay;



// class RemedyInfoDisplay extends React.Component{

//     constructor(props){
//         super()
//         this.state={
//             RemedyName:props.RemedyName,
//             Remedy_information:props.Remedy_information,
//             test:props.test
//         }
//     }

//     render(){
    
    
//         return(
        
//             <div className='Remedy'>
            
        
//             <div className='RemedyName'>
//             <h1>{this.state.RemedyName}</h1>
//             <button >order</button>
//             </div>
//             <p>{this.state.Remedy_information} </p>
//             <p>{this.state.test}</p>
//             </div>
//         )
//     }
// } 


// export default RemedyInfoDisplay;

