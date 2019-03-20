import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Books from './Books';

class Dashboard extends Component {
  state = {

  }

  render () {
    return (
      <div className="Dashboard">
        <Link to={"/Books"}>Click here to go to Books</Link>
        <br />
        <Link to={"/Music"}>Click here to go to Music</Link>
        <br />
        <Link to={"/Pictures"}>Click here to go to Pictures</Link>
        <br />
        <Link to={"/Videos"}>Click here to go to Videos</Link>
        <br />
        <Link to={"/Experiences"}>Click here to go to Experiences</Link>
        <br />
        <Link to={"/Profile"}>Profile</Link>
      </div>
      
    );
  }
}

export default Dashboard;