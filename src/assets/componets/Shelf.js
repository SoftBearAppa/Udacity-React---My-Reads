import React, { Component } from 'react'

import Book from './Book'

class Shelf extends Component {
	constructor(props) {
		super(props);
		this.generateBooks = this.generateBooks.bind(this)
	}

	/* This gets called to generate a 'Book' component and push it into an array to be appened to the page */
	generateBooks(data) {
		const arraydata = [];
		data.map(datas =>
			arraydata.push(<Book bookTitle={datas.title} bookAuthor={datas.authors} bookShelf={datas.shelf} bookCover={datas.url}/>))
			return arraydata;
	}

	render() {

		/* Sets the 'shelfData' prop as a variable for ease of refference */
		const books = this.props.books;

		return(
			<section className="bookshelf">
				<h2 className="bookshelf-title">{this.props.headerTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{this.generateBooks(this.props.books)}
					</ol>
				</div>
			</section>
		)
	}
}

export default Shelf
