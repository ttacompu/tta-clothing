import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/hompage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'



function App() {
  return (
      <div className="App">
          <Route exact={true} path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          
      </div>
  );
}

export default App;
