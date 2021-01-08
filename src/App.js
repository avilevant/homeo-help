import React from 'react';
import Layout from '../src/componenets/layout/layout';
import MainPage from './containers/mainPage/mainPage'

function App() {
  return (
    <div className="App">
    <Layout>
    <MainPage/>
    </Layout>
    </div>
  );
}

export default App;
