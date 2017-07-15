import React, { Component } from 'react'

class Shelf extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<section className="bookself">
				<h2 className="bookshelf-title">{this.props.headerTitle}</h2>
				<div classname="bookshelf-books">
					<ol className="books-grid">
						{this.props.bookData}
					</ol>
				</div>
			</section>
		)
	}
}

export default Shelf
