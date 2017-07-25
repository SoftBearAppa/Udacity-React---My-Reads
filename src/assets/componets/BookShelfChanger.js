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
		if (e.target.value === 'none') {
			return this.props.remove();
		}
		this.props.moves(e.target.value)
	}

	render() {
		return(
			<div className="book-shelf-changer">
				<select value={this.state.shelf} onChange={this.changeShelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReadingShelf">Currently Reading</option>
					<option value="wantToReadShelf">Want to Read</option>
					<option value="readShelf">Read</option>
					<option value="none">Remove</option>
				</select>
			</div>
		)
	}
}

export default BookShelfChanger
