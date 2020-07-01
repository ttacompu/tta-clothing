import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/hompage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatComponent = () =>(
  (
    <div>Hat Component</div>
  )
)

function App() {
  return (
      <div className="App">
          <Route exact={true} path="/" component={Homepage}></Route>
          <Route path="/shop/hats" component={HatComponent}></Route>
          
      </div>
  );
}

export default App;
