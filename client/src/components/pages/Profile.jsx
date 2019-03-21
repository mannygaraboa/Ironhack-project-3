import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';
import Axios from "axios";
import {SERVER_URL} from '../config'
class Profile extends Component {
  state={}
  componentDidMount(){
    console.log(this)
    Axios.get(`${SERVER_URL}/profile/${this.props.match.params.id}`).then(person=>{
      console.log(person)
      this.setState({user:person.data.u})
    })
  }
  
  render () {
    console.log(this)
    const {username, pictureUrl, created_at, updated_at} = {...this.state.user}
    return (
      <div className="Profile">
        <p>Hello You {username}</p>
        <img src={pictureUrl} />
      </div>
    );
  }
}


export default Profile;