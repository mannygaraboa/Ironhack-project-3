import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';
import Axios from "axios";
import {SERVER_URL} from '../config'
class MyProfile extends Component {
  state={}
  componentDidMount(){
    console.log(this)
    Axios.get(`${SERVER_URL}/profile`).then(person=>{
      console.log(person)
      this.setState({user:person.data.u, books:person.data.books})
    })
  }
  
  render () {
    console.log(this)
    const {username, pictureUrl, created_at, updated_at} = {...this.state.user}
    return (
      <div className="MyProfile">
        <p>Hello You {username}</p>
        <img src={pictureUrl} />
      </div>
    );
  }
}


export default MyProfile;