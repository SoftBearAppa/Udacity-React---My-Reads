import React, { Component } from 'react'

import Book from './Book'

class Shelf extends Component {
	constructor(props) {
		super(props);
		this.generateBooks = this.generateBooks.bind(this);
	}

	/* This gets called to generate a 'Book' component and push it into an array to be appened to the page */
	generateBooks(data) {
		const moveBook = this.props.moves;
		if (data === undefined) {
			return console.log('data is: undefined');
		}
		return data.map(datas => <Book moves={moveBook} bookTitle={datas.title} bookAuthor={datas.authors} bookShelf={datas.shelf} key={datas.id} id={datas.id} bookCover={datas.url || datas.imageLinks.thumbnail}/>)
	}

	render() {

		/* Sets the 'shelfData' prop as a variable for ease of refference */
		const books = this.props.books;

		return(
			<section className="bookshelf">
				<h2 className="bookshelf-title">{this.props.headerTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{this.generateBooks(books)}
					</ol>
				</div>
			</section>
		)
	}
}

export default Shelf
