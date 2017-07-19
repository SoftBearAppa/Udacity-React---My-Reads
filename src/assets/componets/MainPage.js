import React, { Component } from 'react'

import Shelf from './Shelf'

class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		/* Sets the 'shelfData' prop as a variable for ease of refference */
		const shelfData = this.props.shelfData;

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf headerTitle="Currently Reading" books={shelfData[0]}/>
						<Shelf headerTitle="Want to Read" books={shelfData[1]} />
						<Shelf headerTitle="Read" books={shelfData[2]}/>
					</div>
				</div>
			</div>
		)
	}
}

export default MainPage
