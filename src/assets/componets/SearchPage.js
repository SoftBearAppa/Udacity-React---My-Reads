import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'

import Shelf from './Shelf'

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: []
		}
		this.queryValue = this.queryValue.bind(this);
		this.searchDataBase = this.searchDataBase.bind(this);
	}

	/* Sets the state of 'query' which then is displayed as 'user input'. It then calls 'searchDataBase'. */
	queryValue(e) {
		this.setState({
			query: e.target.value
		})
		this.searchDataBase(e.target.value);
	}

	/* Gets called by 'queryValue'. This function gets passed an arg, which then is userd to query the 'BooksAPI' database. When the response is received it gets passed prop: 'currentBooks' to filter out books that are already part of the library. Due to there being a limited search terms for the database, there is a 'catch' to handle the errors. */
	searchDataBase(query) {
		if(query) {
			BooksAPI.search(query).then((data) => {
				const currentBooks = this.props.currentBooks;
				data.map((bookResults, i) => {
					currentBooks.map((booksInState) => {
						if (bookResults.id === booksInState.id) {
							return data.splice(i, 1);
						};
					return data});
				return data});
				this.setState({
					results: data
				});
			}).catch((data) => {
				console.log('Unable to search ' + '"' + query + '"' + '. please review "SEARCH_TERMS.md" for all available search terms.');
			})
		}
	}

	render() {
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" value={this.state.query} onChange={this.queryValue} placeholder="Search by title or author"/>
					</div>
				</div>
				<Shelf value="none" headerTitle="" books={this.state.results} moves={this.props.adds}/>
			</div>
		)
	}
}

export default SearchPage
