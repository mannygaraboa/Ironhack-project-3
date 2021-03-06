import React, { Component } from "react";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import { SERVER_URL } from "./config"

import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Milestones from "./pages/Milestones";
import Books from "./pages/Books";
import api from "../api";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import MyProfile from "./pages/MyProfile"

// ES Modules syntax
// import Unsplash from "unsplash-js";
// import Axios from "axios";

// const unsplash = new Unsplash({
//   applicationId:
//     "30a84d7934c6160f90889c0a168475732b2d48edf6b7e3022b737e00e6834f36",
//   secret: "8be63f741ae5a46cb025d67bb6ca85c3624b1192ebad3483c7436867778696be"
// });

export default class App extends Component {
  state = {
    user: {},
    photos: [],
    searchTerm: "nature"
  };

  componentDidMount() {
    this.setUser();
    // this.getPhotos(this.state.searchTerm);
  }

  // getPhotos = photosIWant => {
  //   unsplash.search
  //     .photos(photosIWant, 1)
  //     .then(toJson => toJson.json())
  //     .then(json => {
  //       console.log(json);
  //       this.setState({
  //         photos: json.results
  //       });
  //     });
  // };

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
      // Landing Page
      // style={{backgroundImage: `url('./images/lilypond1.jpg')` }}
      <div className="App">
        <div className="lilyPadBackground" alt="background">
          <header className="App-header">
            <div className="header">
              <h1 className="App-title">Lilypad</h1>
              
              {/* {this.state.user.username} */}
              {!api.isLoggedIn() && <NavLink to="/">Home</NavLink>}
              {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
              {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
              {api.isLoggedIn() && (
                <div className = "navbar">
                  {/* <Link to="/dashboard" onClick={e => this.handleLogoutClick(e)}>
                    Dashboard
                  </Link>
                  <br />
                  <Link to="/MyProfile" onClick={e => this.handleLogoutClick(e)}>
                    Profile
                  </Link>
                  <br />
                  <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                    Logout
                  </Link> */}
                  <Link to="/"> Home </Link>

                  <Link to="/dashboard" >
                    Pond
                  </Link>
                  <Link to="/my-profile" >
                  {this.state.user.username}'s LilyPad
                  </Link>
                  <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                    Logout
                  </Link>                  
                </div>
              )}
              {/* <NavLink to="/dashboard">{api.isLoggedIn() ? `Welcome, ${this.state.user.username}!` :null}</NavLink> */}
              {/* <NavLink to="/secret">Secret</NavLink> */}

              
            </div>

            <h2 className="welcome">Welcome {this.state.user.username}</h2>
              <p>
                A social web application to help users find their path towards
                Enlightenment
              </p>

          </header>

          
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} setUser={this.setUser} photos={this.state.photos} />}
            />
            <Route
              exact path="/signup"
              render={props => <Signup {...props} setUser={this.setUser} />}
            />
            <Route
              path="/login"
              render={props => <Login {...props} setUser={this.setUser} />}
            />
            <Route
              path="/dashboard"
              render={props => <Dashboard {...props} setUser={this.setUser} />}
            />
             <Route
              path="/my-profile"
              render={props => <MyProfile {...props} setUser={this.setUser} />}
            />   
            <Route
              path="/profile/:id"
              render={props => <Profile {...props} setUser={this.setUser} />}
            />   




                     
            {/* <Route
              path="/books"
              render={props => <Books {...props} setUser={this.setUser} kind="books" />}
            /> */}
            {/* <Route
              path="/music"
              render={props => <Music {...props} setUser={this.setUser} />}
            />
            <Route
              path="/pictures"
              render={props => <Pictures {...props} setUser={this.setUser} />}
            />
            <Route
              path="/videos"
              render={props => <Videos {...props} setUser={this.setUser} />}
            />
            <Route
              path="/experiences"
              render={props => <Experiences {...props} setUser={this.setUser} />}
            /> */}
            <Route render={() => <h2>404</h2>} />
          </Switch>

          {/* <div className="intro">
            <h2 className="welcome">Welcome to Lilypad!</h2>
              <p>
                A social web application to help users find their path towards
                Enlightenment
              </p>
          </div> */}

          {/* <div className="white-square">
            <h1 className="register">Register</h1>
            <form>
              Username:{" "}
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleInputChange}
              />{" "}
              <br />
              Name:{" "}
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleInputChange}
              />{" "}
              <br />
              Password:{" "}
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
              />{" "}
              <br />
              <button
                className="register-button"
                onClick={e => this.handleClick(e)}
              >
                Signup
              </button>
            </form>
          </div> */}
 
        </div> 

        <div className="container">
          <h1 className="about">About</h1>
          <div className="row">
            <div className="col-lg-4">
              <img
                className="icons"
                src={"../../images/lily-pad-icon.png"}
                alt="firstImage"
              />
              <h6>
                <b>lilypad</b>
              </h6>
              <p>
                "A round, floating leaf from a water lily." Build a new home on
                top your own lilypad and be able to share with other users
              </p>
            </div>

            <div className="col-lg-4">
              <img
                className="icons"
                src={"../../images/golden-ratio.png"}
                alt="secondImage"
              />
              <h6>
                <b>Golden Ratio</b>
              </h6>
              <p>
                Everything in this world is based off this mathematical
                equation. Study it and see how it applies to our surroundings,
                intentionally or not.
              </p>
            </div>

            <div className="col-lg-4">
              <img
                className="icons"
                src={"../../images/sun-icon.png"}
                alt="thirdImage"
              />
              <h6>
                <b>Enlightenment</b>
              </h6>
              <p>
                Through education and awareness we are able to create change for
                the better.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="components">
          <h1 className="share">What to Share</h1>
        </div> */}

      </div>
    );
  }
}
