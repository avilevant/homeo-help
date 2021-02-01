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


    </Switch>
    </Layout>
    </div>
  );
}

export default App;
