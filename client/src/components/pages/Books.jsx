import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import axios from "axios"
class Books extends Component 
{
  state = {
    books:[]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/getBooks').then(res=>{
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
    axios.post('http://localhost:5000/api/saveBook', {name:book}).then(res=>{
      
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
          <button onClick={()=>this.deleteButton(index)} className="delete-book">Delete</button>
        </div>
      )
    })
  }

  deleteButton = (index) => // Delete a Book 
  {
    let copyBooks = [...this.state.books];

    copyBooks.splice(index, 1)
    this.setState({
      books: copyBooks
    })
  }

  render () 
  {
    return (
      <div className="Books">
        <h1>Your crud goes here</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="book" type="text" />
          <button type="submit">Add</button>
        </form>
        {this.showBooks()}
      </div>
    )
  }
}
export default Books; 
