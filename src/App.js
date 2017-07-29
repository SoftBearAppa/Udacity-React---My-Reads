import React, { Component } from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import preLoadBooks from './PreLoadBooks'
import SearchPage from './assets/componets/SearchPage'
import MainPage from './assets/componets/MainPage'

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      books: []
      /* currentlyReadingShelf:[],
      wantToReadShelf: [],
      readShelf: [] */
    };
    this.storeBookData = this.storeBookData.bind(this);
    this.moveBook = this.moveBook.bind(this);
    /* this.removeBook = this.removeBook.bind(this); */
  }

  /* Get called when the componets mounts, this gathers the books that were loaded with original project and organizes them into their respective shelfs */
  storeBookData(bookData) {
    this.setState({
      books: bookData
    })
    /* const books = [];
    const currentlyReadingShelf = [];
    const wantToReadShelf = [];
    const readShelf = [];
    data.map(data => {
      books.push(data);
      if (data.shelf === "currentlyReading") {
        currentlyReadingShelf.push(data);
      } else  if (data.shelf === "wantToRead") {
        wantToReadShelf.push(data);
      } else if (data.shelf === "read") {
        readShelf.push(data);
      }
    })
    this.setState({
      books: books,
      currentlyReadingShelf: currentlyReadingShelf,
      wantToReadShelf: wantToReadShelf,
      readShelf: readShelf
    }) */
  }

  /* Function removes the book from its current shelf */
  /* removeBook(id, fromShelf) {
    const books = this.state.books;
    const fShelf = this.state[fromShelf];
    const updateShelf = fShelf.filter((book) => book.id !== id);
    const updateBooks = books.filter((book) => book.id !== id);
    return this.setState({
      books: updateBooks,
      [fromShelf]: updateShelf
    })
  } */

  /* removeBook(book, toShelf) {
    console.log(book);
    BooksAPI.update(book, toShelf).then((data) => console.log(data));
  } */

  moveBook(book, toShelf) {
    BooksAPI.update(book, toShelf).then((booksData) => {
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

  /* Function removes the book from its current shelf and appends the data to the shelf that the user selected */
  /* moveBook(bookData, moveToShelf, fromShelf) {

    /* If he user accidently selects the shelf that the book is already on, it notifies the user */
     /*if (fromShelf === moveToShelf) {
      return alert('The book is already on that shelf');
    }
    const books = this.state.books;
    const id = bookData.id;
    bookData.shelf = moveToShelf;
    const mShelf = this.state[moveToShelf];
    const moveShelf = mShelf.concat([bookData]);
    this.removeBook(id, fromShelf);
    this.setState({
      [moveToShelf]: moveShelf
    })
  } */

  componentDidMount() {
    /* Gathers the books that were loaded with original project */
    /* this.storeBookData(preLoadBooks.preLoadBooks); */

    /* Comented out original books for the time being. */
    BooksAPI.getAll().then((bookData) => this.storeBookData(bookData));
  }

  render() {

    /* Gathers the state of the shelfs and sorts them as variable and passes it as a prop to 'MainPage' component */
    /* const shelfs = [this.state.currentlyReadingShelf,this.state.wantToReadShelf, this.state.readShelf] */

    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          <SearchPage />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div>
            <MainPage bookData={this.state.books} moves={this.moveBook} /* remove={this.removeBook} *//>
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
