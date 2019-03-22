import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'
import Books from './Books'
import Dashboard from "./Dashboard";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
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
  render() {                
    return (
      <div className="Home">
        <h2 className="check-users">See other lilypads!</h2>
          <Link to="/dashboard" >Dashboard</Link>

        
        {/* <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new profile picture</button>
        </form> */}

        
      </div>
    );
  }


  //componentDidMount(){

    // console.log(api.isLoggedIn())
    // console.log(api.getLocalStorageUser())

    // Axios.get('http://localhost:5000/api/whatever',).then(res=>{
    //   // console.log(res)
    // })

  //}

  // showPhotos = () => {
  //   let allPhotos = this.props.photos.map((eachPhoto, i)=>{
  //     return (
  //       <li key={i}>
  //         <img src={eachPhoto.links.download} />
  //         <i>{eachPhoto.description}</i>
  //       </li>
  //     )
  //   })
  //   return allPhotos
  // }

  
  
}
