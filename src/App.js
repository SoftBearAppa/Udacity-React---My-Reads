import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
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
      books: [],
      currentlyReadingShelf:[],
      wantToReadShelf: [],
      readShelf: []
    };
    this.storeShelf = this.storeShelf.bind(this);
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
    });
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
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/' render={() => (
          <div>
            <MainPage shelfData={shelfs}/>
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
