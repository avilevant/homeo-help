import React,{ Component } from 'react';
import './layout.css';
import ToolBar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/sideDrawer/sideDrawer';

class Layout extends Component{

    state={
        SideDrawerShow:false
    }

    SideDrawerClose =()=>{
        this.setState({SideDrawerShow:false})
    }

    SideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{ return{SideDrawerShow:!prevState.SideDrawerShow}})
    }

    // <SideDrawer open={this.state.SideDrawerShow} closed={this.SideDrawerClose}/>

    render(){
        return(
             <div>
    <ToolBar DrawerToggleClicked={this.SideDrawerToggleHandler}/>
    <SideDrawer open={this.state.SideDrawerShow} closed={this.SideDrawerClose} DrawerToggleClicked={this.SideDrawerToggleHandler}/>
    <main className='content' >
    {this.props.children}
    </main>
    </div>
        )
    }

   
}

export default Layout;