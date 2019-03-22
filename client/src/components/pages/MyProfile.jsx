import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';
import Axios from "axios";
import {SERVER_URL} from '../config'
class MyProfile extends Component {
   state={
    user:{},
    books:[]
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
    const {username, pictureUrl, created_at, updated_at} = {...this.state.user}
    return (



      
      <div className="MyProfile">
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new profile picture</button>
        </form>


        {this.showBooks()}
        
        <img src={pictureUrl} height="100px" width="100px"/>
      </div>
    );
  }
}


export default MyProfile;