import React, { Component } from 'react'

class BookShelfChanger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shelf: this.props.shelf
		}
		this.changeShelf = this.changeShelf.bind(this);
	}

	changeShelf(e) {
		this.props.moves(e.target.value)
	}

	render() {
		return(
			<div className="book-shelf-changer">
				<select value={this.state.shelf} onChange={this.changeShelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="remove">Remove</option>
				</select>
			</div>
		)
	}
}

export default BookShelfChanger
