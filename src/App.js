import React from "react";
import "./App.css";
import Homepage from "./pages/hompage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/signpage/signpage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { connect } from "react-redux";
import { setUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribFromAuth = null;

  state = {
    currentUser : null
  };

  componentDidMount() {
    const {setUser} = this.props;

    this.unsubscribFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }
  render() {
    
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}   />

        <Switch>
          <Route exact={true} path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact={true} path="/sign"  render={()=> this.props.currentUser  ? (<Redirect to="/" />) : (<SignPage />) }></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps =(state) => ({ currentUser : state.user.currentUser})
const dispatchToProps = (dispatch) => ({ setUser : user => dispatch(setUser(user)) });

//export default  App;

export default connect(mapStateToProps, dispatchToProps)(App);
