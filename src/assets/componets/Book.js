import React, { Component } from 'react'

import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.bookTitle,
			author: this.props.bookAuthor,
			shelf: this.props.bookShelf,
			key: this.props.id,
			url: this.props.bookCover,
			id: this.props.id
		}
		this.moveBookData = this.moveBookData.bind(this);
		/* this.removeBookData = this.removeBookData.bind(this); */
	}

	/* Function receives a value from 'BookShelfChanger' and passes the value into 'move' prop which eventually calls 'moveBook' from 'App.js'  to move the book from its current shelf to shelf that was selected from 'BookShelfChanger'*/
	moveBookData(moveToShelf) {
		const move = this.props.moves;
		move(this.state, moveToShelf, this.props.bookShelf);
	}

	/* Function calls on 'remove' prop which eventually calls 'removeBook' from 'App.js' to remove the book from it's current shelf. */
	/* removeBookData() {
		const remove = this.props.remove;
		remove(this.state, this.props.bookShelf);
	} */

	render() {

		/* Sets a basic style for the books */
		const cover = {
			width: 128,
			height: 180,
			backgroundImage: 'url(' + this.props.bookCover + ')',
		};

		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={cover}>

							{/* Button to move the book to a diffrent shelf */}
							<BookShelfChanger moves={this.moveBookData} /* remove={this.removeBookData} */ shelf={this.props.bookShelf}/>
						</div>
					</div>
					<div className="book-title">
						{this.props.bookTitle}
					</div>
					<div className="book-authors">
						{this.props.bookAuthor}
					</div>
				</div>
			</li>
		)
	}
}

export default Book
