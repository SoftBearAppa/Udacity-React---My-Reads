import React, { Component } from 'react'

import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
	constructor(props) {
		super(props);
	}

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
						
							/* Button to move the book to a diffrent shelf */
							<BookShelfChanger />
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
