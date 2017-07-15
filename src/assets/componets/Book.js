import React, { Component } from 'react'

import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover">
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
