import React from "react";
import "./App.css";
import Homepage from "./pages/hompage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
