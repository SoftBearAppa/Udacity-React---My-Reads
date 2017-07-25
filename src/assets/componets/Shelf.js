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
		const removeBook = this.props.remove;
		const arraydata = [];
		data.map(datas =>
			arraydata.push(<Book moves={moveBook} remove={removeBook} bookTitle={datas.title} bookAuthor={datas.authors} bookShelf={this.props.value} key={datas.key} id={datas.key} bookCover={datas.url}/>))
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
					{this.generateBooks(books)}
					</ol>
				</div>
			</section>
		)
	}
}

export default Shelf
