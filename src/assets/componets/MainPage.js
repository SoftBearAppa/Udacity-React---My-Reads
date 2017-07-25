import React, { Component } from 'react'

import Shelf from './Shelf'

class MainPage extends Component {

	render() {

		/* Sets the prop as a variables for ease of refference */
		const shelfData = this.props.shelfData;
		const moveBook = this.props.moves;
		const removeBook = this.props.remove;

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf value="currentlyReadingShelf" headerTitle="Currently Reading" books={shelfData[0]} moves={moveBook} remove={removeBook} />
						<Shelf value="wantToReadShelf" headerTitle="Want to Read" books={shelfData[1]} moves={moveBook} remove={removeBook} />
						<Shelf value="readShelf" headerTitle="Read" books={shelfData[2]} moves={moveBook} remove={removeBook} />
					</div>
				</div>
			</div>
		)
	}
}

export default MainPage
