import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';
import Axios from "axios";
import {SERVER_URL} from '../config'
import Books from './Books'
class Profile extends Component {
  state={
    user:{},
    books:[],
    bio: String,
  }
  componentDidMount(){
    console.log(this)
    Axios.get(`${SERVER_URL}/profile/${this.props.match.params.id}`).then(person=>{
      console.log(person)
      this.setState({user:person.data.u, books:person.data.books})
    })
  }
  showBooks = () => {
    return this.state.books.map(book=>{
      return <li>{book.name}</li>
    })
  }
  
  render () {
    console.log(this)
    const {username, pictureUrl, bio, created_at, updated_at} = {...this.state.user}
    return (
      <div className="profile">
        {this.showBooks()}
        <p>{username}'s Lilypad</p>
        <p>About Me: {bio}</p>
        <img src={pictureUrl} width="100px" height="100px"/>

        <Books {...this.props} />
      </div>
    );
  }
}


export default Profile;