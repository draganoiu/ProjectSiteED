import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.util'

class App extends React.Component {
    constructor(){
      super();

      this.state = {
        currentUser : null

      }

    }

    unsubscribeFromAuth = null;

    componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user});
        console.log(user)
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();

    }

  render(){
    
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );


  }

}

export default App;
