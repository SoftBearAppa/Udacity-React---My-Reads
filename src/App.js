import React, { Component } from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'
import './BooksAPI'
import preLoadBooks from './PreLoadBooks'
import SearchPage from './assets/componets/SearchPage'
import MainPage from './assets/componets/MainPage'

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      currentlyReadingShelf:[],
      wantToReadShelf: [],
      readShelf: []
    };
    this.storeShelf = this.storeShelf.bind(this);
    this.moveBook = this.moveBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  /* Get called when the componets mounts, this gathers the books that were loaded with original project and organizes them into their respective shelfs */
  storeShelf(data) {
    const currentlyReadingShelf = [];
    const wantToReadShelf = [];
    const readShelf = [];
    data.map(data => {
      if (data.shelf === "currentlyReadingShelf") {
        currentlyReadingShelf.push(data);
      } else  if (data.shelf === "wantToReadShelf") {
        wantToReadShelf.push(data);
      } else if (data.shelf === "readShelf") {
        readShelf.push(data);
      }
    })
    this.setState({
      currentlyReadingShelf: currentlyReadingShelf,
      wantToReadShelf: wantToReadShelf,
      readShelf: readShelf
    })
  }

  /* Function removes the book from its current shelf */
  removeBook(id, fromShelf) {
    const fShelf = this.state[fromShelf];
    const updateShelf = fShelf.filter((i) => i.id !== id)
    return this.setState({
      [fromShelf]: updateShelf
    })
  }

  /* Function removes the book from its current shelf and appends the data to the shelf that the user selected */
  moveBook(book, moveToShelf, fromShelf) {

    /* If he user accidently selects the shelf that the book is already on, it notifies the user */
    if (fromShelf === moveToShelf) {
      return alert('The book is already on that shelf');
    }
    const id = book.id;
    book.shelf = moveToShelf;
    const mShelf = this.state[moveToShelf];
    const moveShelf = mShelf.concat([book]);
    this.removeBook(id, fromShelf);
    this.setState({
      [moveToShelf]: moveShelf,
    })
  }

  componentDidMount() {
    /* Gathers the books that were loaded with original project */
    this.storeShelf(preLoadBooks.preLoadBooks);
  }

  render() {

    /* Gathers the state of the shelfs and sorts them as variable and passes it as a prop to 'MainPage' component */
    const shelfs = [this.state.currentlyReadingShelf,this.state.wantToReadShelf, this.state.readShelf]

    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
          <SearchPage />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div>
            <MainPage shelfData={shelfs} moves={this.moveBook} remove={this.removeBook}/>
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
