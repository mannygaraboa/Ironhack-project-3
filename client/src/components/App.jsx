import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import api from "../api";
import logo from "../logo.svg";
// ES Modules syntax
import Unsplash from "unsplash-js";
import Axios from "axios";

const unsplash = new Unsplash({
  applicationId: "30a84d7934c6160f90889c0a168475732b2d48edf6b7e3022b737e00e6834f36",
  secret: "8be63f741ae5a46cb025d67bb6ca85c3624b1192ebad3483c7436867778696be"
});

export default class App extends Component {
  state = {
    countries: [],
    user: {},
    photos: [],
    searchTerm: 'nature'
  };

  componentDidMount() {
    this.setUser();
    this.getPhotos(this.state.searchTerm);
  }

  getPhotos = (photosIWant) => {
    unsplash.search
      .photos(photosIWant, 1)
      .then(toJson => toJson.json())
      .then(json => {
        console.log(json);
        this.setState({
          photos:json.results
        })
      });
  };

  setUser = () => {
    if (api.isLoggedIn()) {
      this.setState({ user: api.getLocalStorageUser() });
    } else {
      this.setState({ user: {} });
    }
  };

  handleLogoutClick(e) {
    api.logout();
    //this.setState({user:null})
    this.setUser();
  }

  render() {
    return (
      //Landing Page
      <div className="App">
        <div className="lilyPadBackground" style={{backgroundImage: `url('./images/lilypond1.jpg')` }} alt="background">          
          
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lily Pad</h1>
          {this.state.user.username}
          <NavLink to="/" exact>
            Home
          </NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            // render={props => <Home {...props} setUser={this.setUser} photos={this.state.photos} />}
          />
          <Route
            path="/signup"
            render={props => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path="/login"
            render={props => <Login {...props} setUser={this.setUser} />}
          />

          <Route render={() => <h2>404</h2>} />
        </Switch>
        </div>


        <div className="container">
          <h1 className="about">About</h1>
          <div className="row">
            <div className="col-lg-4">
              <img className="col-img" alt="firstImage" />
              <h6><b>KING OF ANTIOXIDANTS</b></h6>
              <p>Antioxidants can protect and reverse some of the damage. They also boost your immunity.</p>
            </div>

            <div className="col-lg-4">
              <img className="col-img" alt="firstImage" />
              <h6><b>KING OF ANTIOXIDANTS</b></h6>
              <p>Antioxidants can protect and reverse some of the damage. They also boost your immunity.</p>
            </div>

            <div className="col-lg-4">
              <img className="col-img" alt="firstImage" />
              <h6><b>KING OF ANTIOXIDANTS</b></h6>
              <p>Antioxidants can protect and reverse some of the damage. They also boost your immunity.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

