import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
  state = {
      username: "",
      password: "",
      message: null
  }


  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    api.login(this.state.username, this.state.password)
      .then(result => {
        // console.log(api.getLocalStorageUser())
        // this.setState({user:api.getLocalStorageUser()})
        this.props.setUser()
        this.props.history.push("/dashboard") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    console.log()
    return (
      <div className="Login">
        <h2>Login</h2>
        <form>
          Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}
