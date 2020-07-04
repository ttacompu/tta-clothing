import React from "react";
import "./App.css";
import Homepage from "./pages/hompage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/signpage/signpage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  state = { currentUser: null };
  unsubscribFromAuth = null;

  componentDidMount() {
    this.unsubscribFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
            this.setState({
              currentUser : {
                id : snapShot.id,
                ...snapShot.data()
              }
            }, ()=>console.log(this.state) );
        });
        
      }else{
        this.setState({currentUser : userAuth});
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact={true} path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/sign" component={SignPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
