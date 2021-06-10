import React,{ Component } from 'react';
import './layout.css';
import ToolBar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/sideDrawer/sideDrawer';

class Layout extends Component{

    state={
        SideDrawerShow:false,
        installPrompt:''
    }

    SideDrawerClose =()=>{
        this.setState({SideDrawerShow:false})
    }

    SideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{ return{SideDrawerShow:!prevState.SideDrawerShow}})
    }

    //an option to save the native install option

//     componentDidMount(){

//         console.log('activated')
//          // Initialize deferredPrompt for use later to show browser install prompt.

//         window.addEventListener('beforeinstallprompt', (e) => {
//          // Prevent the mini-infobar from appearing on mobile
//         e.preventDefault();
//         // Stash the event so it can be triggered later.
//         this.setState({installPrompt:e});
//         // Optionally, send analytics event that PWA install promo was shown.
//         console.log(`'beforeinstallprompt' event was fired.`);
// }); 
//     }

    render(){
        return(
                <div>
                <ToolBar DrawerToggleClicked={this.SideDrawerToggleHandler} openDrawer={this.state.SideDrawerShow}
                readyToInstall={this.state.installPrompt} />
                <SideDrawer open={this.state.SideDrawerShow} closed={this.SideDrawerClose} DrawerToggleClicked={this.SideDrawerToggleHandler}/>
                <main className='content' >
                {this.props.children}
                </main>
                </div>
        )
    }

   
}

export default Layout;