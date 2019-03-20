import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Books from './Books';

class Dashboard extends Component {
  state = {

  }

  render () {
    return (
      <div className="Dashboard">
        <Link to={"/Books"}>Click here to go to books</Link>
      </div>
    );
  }
}

export default Dashboard;