import React from 'react';
import './remedyCompare.css';
import RemedyInfoButton from '../../componenets/remedyInfoButton/remedyInfoButton';
import {Link} from 'react-router-dom';
import RemedyInfoDisplay from '../../info/remedyInfoDisplay/remedyInfoDisplay';


const RemedyCompare =()=>{

return(
    <div className='remedy_compare'>
    
    <div className='remedy_options'>
    
    
    <RemedyInfoButton  feature={'מאפיינים יחודיים'}/>
    <RemedyInfoButton feature={'מאפיינים רגשיים'}/>
    <RemedyInfoButton feature={'מאפיינים פיזיים'}/>
    
    
    
    <p className='remedy_name'>שם הרמדי</p>
    
    
    </div>
    <RemedyInfoDisplay/>
    <RemedyInfoDisplay/>
    <RemedyInfoDisplay/>
    <RemedyInfoDisplay/>
    <RemedyInfoDisplay/>

    <Link to='/infoPage'>
    
    <button className='returnButton'>
    back
    </button>
    </Link>
    
    </div>
   )

}

export default RemedyCompare;