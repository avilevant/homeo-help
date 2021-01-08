import React from 'react';

import './iconButton.css';

// class IconButton extends Component{
//     constructor(){
//         super()

//     this.state={
//         icon:'',
//         title:''
//     }    
    

//     }

//     render(){
//         return(
//             <div>
//             <button>
//             <img className='img1' src={img2} alt="img"/>
//             </button>
            
//             <p>say hello to my little friend</p>
//             </div>
//         )
//     }
// }


const IconButton =({title,icon})=>{
    return(
        <div>
            <button>
            {icon}
            </button>
            
            <div className='name'>{title}</div>
        </div>
    )
}

export default IconButton;