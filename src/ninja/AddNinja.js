import React, { Component } from 'react'

import Radium from 'radium' 

class AddNinja extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.addNinja(this.state)
	}
	render() {

		const style = {
			'@media (min-width: 700px)': {
				width: '200px'
			}
		};

		return (
			<div style={style}>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange} />
					<label htmlFor="name">Age:</label>
					<input type="text" id="age" onChange={this.handleChange} />
					<label htmlFor="name">Belt:</label>
					<input type="text" id="belt" onChange={this.handleChange} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default Radium(AddNinja);