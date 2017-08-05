import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import { Debounce } from 'react-throttle'

import Shelf from './Shelf'

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		}
		this.searchDataBase = this.searchDataBase.bind(this);
	}

	/* This function gets passed an event, which then is userd to query the 'BooksAPI' database. When the response is received it gets passed prop: 'currentBooks' to filter out books that are already part of the library. Due to there being a limited search terms for the database, there is a 'catch' to handle the errors. */
	searchDataBase(e) {
		const trimmedQuery = e.target.value.trim()
		if(trimmedQuery) {
			BooksAPI.getAll().then((bookStates) => {
				console.log(bookStates);
				BooksAPI.search(trimmedQuery).then((searchedBooks) => {
					console.log(searchedBooks);
					if (searchedBooks) {
						let filterBooks = [];
						if (filterBooks) {
							filterBooks = searchedBooks;
							filterBooks = filterBooks.map((book) => {
								const foundBook = bookStates.find((bookStatesBooks) => {
									return bookStatesBooks.id === book.id
								});
								if (foundBook) {
									return foundBook
								} else {
									return book
								}
							})
							console.log(searchedBooks)
						}
						this.setState({
							results: filterBooks
						});
					}
				}).catch((data) => {
					console.log('Unable to search "' + trimmedQuery + '". Please review "SEARCH_TERMS.md" for all available search terms.');
				})
			})
		}
	}

	render() {
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
						<div className="search-books-input-wrapper">
						<Debounce time='400' handler='onChange'>
								<input type="text" onChange={this.searchDataBase} placeholder="Search by title or author"/>
							</Debounce>
						</div>
				</div>
				<Shelf value="Search" headerTitle="" books={this.state.results} moves={this.props.moves}/>
			</div>
		)
	}
}

export default SearchPage
