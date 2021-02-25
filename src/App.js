import React from 'react';
import { Switch,Route } from 'react-router-dom'
import Layout from '../src/componenets/layout/layout';
import MainPage from './containers/mainPage/mainPage';
import InfoPage from './containers/infoPage/infoPage';
import RemedyCompare from './containers/remedyCompare/remedyCompare';
import RemedyOrder from './containers/remedyOrder/remedyOrder';
import OrderConfirmation from './containers/orderConfirmation/orderConfirmation';
import VideoLibrary from './containers/videosPage/videosPage'; 
import About from './containers/about/about';
import Contact from './containers/contact/contact';
import KitInfo from './containers/KitInfo/KitInfo';
import RemedyUse from './containers/remedyUse/remedyUse';
import Declaration from './containers/declaration/declaration';
import ContactConfirmation from './containers/contactConfirmation/contactConfirmation';
import UseApp from './containers/useApp/useApp';



function App() {
  return (
    <div className="App">
    <Layout>
    <Switch>
    <Route exact path='/' component ={MainPage}/>
    <Route path='/infoPage' component ={InfoPage}/>
    <Route path='/remedyCompare' component ={RemedyCompare}/>
    <Route path='/RemedyOrder' component ={RemedyOrder}/>
    <Route path='/OrderConfirmation' component ={OrderConfirmation}/>
    <Route path='/VideoLibrary' component ={VideoLibrary}/>
    <Route path='/About' component ={About}/>
    <Route path='/Contact' component ={Contact}/>
    <Route path='/KitInfo' component ={KitInfo}/>
    <Route path='/RemedyUse' component ={RemedyUse}/>
    <Route path='/Declaration' component ={Declaration}/>
    <Route path='/ContactConfirmation' component ={ContactConfirmation}/>
    <Route path='/UseApp' component ={UseApp}/>
    </Switch>
    </Layout>
    </div>
  );
}

export default App;
