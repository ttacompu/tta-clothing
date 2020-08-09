import React, {useEffect} from "react";
import "./App.css";
import Homepage from "./pages/hompage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/signpage/signpage.component";
import CheckoutPage from "./pages/checkout/checkout.component"
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.action'



const App = ({checkUserSession,  currentUser}) =>{
  useEffect( () =>{
    checkUserSession(); 
  }, [checkUserSession])
  return (
    <div className="App">
      <Header currentUser={currentUser} />

      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact={true} path="/sign"  render={()=> currentUser  ? (<Redirect to="/" />) : (<SignPage />) }></Route>
      </Switch>
    </div>
  );
}


const mapStateToProps =() => createStructuredSelector({
  currentUser : selectCurrentUser

});

const mapDispatchToProps = dispatch =>({checkUserSession : () => dispatch(checkUserSession()) })


//export default  App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
