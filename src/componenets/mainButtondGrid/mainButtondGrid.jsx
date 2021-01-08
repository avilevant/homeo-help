import React from 'react';
import './mainButtondGrid.css';
import IconButton from '../iconButton/iconButton';
import AcuteList from '../acuteList/acuteList';
// import img2 from '../../images/x_and_menu_icons-56.png';

const MainButtonGrid = () =>{


        const showIcons = () =>{
         
            return(
                
                AcuteList.map(({title,icon})=>(
                    <IconButton title={title} icon={icon} /> 
                     
                ))
            )
        }

       

         



        return(

            <div className='grid_structure'>
           
           {showIcons()}
           
           </div>
        )
}


export default MainButtonGrid;