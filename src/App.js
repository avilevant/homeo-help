import React from 'react';
import { Switch,Route } from 'react-router-dom'
import Layout from '../src/componenets/layout/layout';
import MainPage from './containers/mainPage/mainPage';
import InfoPage from './containers/infoPage/infoPage';

function App() {
  return (
    <div className="App">
    <Layout>
    <Switch>
    <Route exact path='/' component ={MainPage}/>
    <Route path='/infoPage' component ={InfoPage}/>
    </Switch>
    </Layout>
    </div>
  );
}

export default App;
