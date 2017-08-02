import React, { Component } from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './assets/componets/SearchPage'
import MainPage from './assets/componets/MainPage'

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.storeBookData = this.storeBookData.bind(this);
    this.moveBook = this.moveBook.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  storeBookData(bookData) {
    this.setState({
      books: bookData
    })
  }

  moveBook(book, toShelf) {
    BooksAPI.update(book, toShelf).then((bookId) => {
      this.setState((prevState) => {
        books: prevState.books.map((findBook) => {
          if (book.id === findBook.id) {
            findBook.shelf = toShelf
          }
          return findBook;
        })
      })
    });
  }

  addBook(book, toShelf) {
    console.log(book);
    console.log(toShelf);
    BooksAPI.update(book, toShelf).then((bookId) => {
      book.shelf = toShelf;
      this.setState((prevState) => {
        books: prevState.books.concat(book)
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookData) => this.storeBookData(bookData));
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          <SearchPage adds={this.addBook} currentBooks={this.state.books}/>
        )} />
        <Route exact path='/' render={({ history }) => (
          <div>
            <MainPage bookData={this.state.books} moves={this.moveBook} />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
