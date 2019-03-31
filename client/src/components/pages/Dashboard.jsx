import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Books from './Books';
import Profile from './Profile'
import Axios from "axios";
import {SERVER_URL} from '../config'


class Dashboard extends Component {

  state={
    users:[]
  }

  componentDidMount() {
    Axios.get(`${SERVER_URL}/allUsers`).then(users=>{
      this.setState({users:users.data.all})
    })
  }

  showUsers = () => {
    return this.state.users.map(user=>{
      return (
        <ul>
        <li>
          <a href={'profile/'+user._id}> {user.username} </a>
        </li>
        </ul>
      )
    })
  }

  render () {
    console.log(this)
    return (
      <div className="Dashboard">
        <h1>Check out other Lilypads in the Pond</h1>

      {this.showUsers()}
        {/* <Link to={"/Books"}>Click here to go to Books</Link>
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
        */}
      </div> 
      
    );
  }
}

export default Dashboard;