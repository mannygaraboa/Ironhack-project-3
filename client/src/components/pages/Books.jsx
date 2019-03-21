import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import axios from "axios"
import { SERVER_URL } from "../config"

class Books extends Component 
{
  state = {
    books:[]
  }

  componentDidMount() 
  {
    axios.get(`${SERVER_URL}/getbooks`).then(res=>{
    // axios.get('http://localhost:5000/api/getBooks').then(res=>{
      console.log(res)
      this.setState({
        books:res.data.books
      })
    })
  }
  handleSubmit = (e) => 
  {
    e.preventDefault()
    console.log(e.target.book.value)
    let book = e.target.book.value;
    axios.post(`${SERVER_URL}/saveBook`, {name:book}).then(res=>{
    //axios.post('http://localhost:5000/api/saveBook', {name:book}).then(res=>{
      
      let books = [...this.state.books]
      books.push({name:book})
      this.setState({
        books:books
      })
    })
  }

  showBooks = () => 
  {
    return this.state.books.map((oneBook, index)=>{
      return (
        <div key={index} className="one-book">
          <li className="one-book-name">{oneBook.name}</li>
          <button onClick={()=>this.deleteButton(index, oneBook._id)} className="delete-book">Delete</button>
        </div>
      )
    })
  }

  deleteButton = (index, id) => // Delete a Book 
  {
    axios.delete(`${SERVER_URL}/delete/${id}`).then(res=> {
    // axios.delete(`http://localhost:5000/api/delete/${id}`).then(res=> {
    // console.log("index is " + index)
      
    let copyBooks = [...this.state.books];

    copyBooks.splice(index, 1)
    this.setState({
      books: copyBooks
    })
      // console.log("copyBooks is:")
      // console.log(copyBooks)
      // console.log(this.state.books)
      // console.log("copyBooks.length is " + copyBooks.length)
    })
  }


  // axios.get('http://localhost:5000/api/delete').then(res=>
  //   {
  //     console.log(res)
  //     copyBooks.splice(index, 1)
  //     this.setState({
  //       books: copyBooks
  //     })
  //   })
  // }

  render () 
  {
    return (
      <div className="Books">
        <h1>Your crud goes here</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="book" type="text" />
          <button type="submit">Add</button>
        </form>
        <br />
        <Link to={"/Dashboard"}>Dashboard</Link>
        {this.showBooks()}
      </div>
    )
  }
}
export default Books; 
