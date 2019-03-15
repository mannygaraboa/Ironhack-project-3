import React, { Component } from 'react';
import api from '../../api';

export default class AddMilestone extends Component {
  state = {
    name: "",
    description: "",
    images: [],
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      description: this.state.description,
      images: this.state.images,
    }
    api.addMilestone(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          description: "",
          images: "",
          message: `Your Milestone '${this.state.name}' has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  render() {
    return (
      <div className="AddMilestone">
        <h2>Add Milestone</h2>
        <form>
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
          Description: <textarea value={this.state.description} name="description" cols="30" rows="10" onChange={this.handleInputChange} ></textarea> <br />
          Pictures: <img src={this.state.images.links.download} name="images"onChange={this.handleInputChange} />
          <button onClick={(e) => this.handleClick(e)}>Create country</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}
