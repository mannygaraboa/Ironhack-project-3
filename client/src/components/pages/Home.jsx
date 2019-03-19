import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'

export default class Home extends Component {
  componentDidMount(){

    // console.log(api.isLoggedIn())
    // console.log(api.getLocalStorageUser())

    // Axios.get('http://localhost:5000/api/whatever',).then(res=>{
    //   // console.log(res)
    // })

  }

  showPhotos = () => {
    let allPhotos = this.props.photos.map((eachPhoto, i)=>{
      return (
        <li key={i}>
          <img src={eachPhoto.links.download} />
          <i>{eachPhoto.description}</i>
        </li>
      )
    })
    return allPhotos
  }


  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        {this.showPhotos()}
      </div>
    );
  }
}
