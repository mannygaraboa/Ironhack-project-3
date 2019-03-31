import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';
import Axios from "axios";
import {SERVER_URL} from '../config'
class MyProfile extends Component {
   state={
    user:{},
    books:[],
    bio: String,
  }

  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    // Reuse of the method "addPicture" from the file '../api'
    api.addPicture(this.state.file)
  }

  componentDidMount(){
    console.log(this)
    Axios.get(`${SERVER_URL}/profile`).then(person=>{
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
      <div className="my-profile">
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p>Character Bio</p>
          <textarea class="form-control" type="text" name="comment" rows="2" ></textarea>
          <input type="file" onChange={(e) => this.handleChange(e)} /> <br/>
          <button type="submit" VALUE="Refresh">Save new profile picture</button>
        </form>
        
        {this.showBooks()}
        
        <img src={pictureUrl} height="200px" width="200px"/>
      </div>
    );
  }
}


export default MyProfile;