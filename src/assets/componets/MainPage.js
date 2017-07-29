import React, { Component } from 'react'

import Shelf from './Shelf'

class MainPage extends Component {

	render() {

		/* Grabs prop 'bookData' and filters the books to their respective shelfs */
		const bookData = this.props.bookData;
		const currentReadingBooks = bookData.filter((book) => {
			return book.shelf === 'currentlyReading';
		});
		const wantToReadBooks = bookData.filter((book) => {
			return book.shelf === 'wantToRead';
		});
		const readBooks = bookData.filter((book) => {
			return book.shelf === 'read';
		});

		/* Sets the prop as a variables for ease of refference */
		const moveBook = this.props.moves;

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf value="currentlyReading" headerTitle="Currently Reading" books={currentReadingBooks} moves={moveBook} />
						<Shelf value="wantToRead" headerTitle="Want to Read" books={wantToReadBooks} moves={moveBook} />
						<Shelf value="read" headerTitle="Read" books={readBooks} moves={moveBook} />
					</div>
				</div>
			</div>
		)
	}
}

export default MainPage
