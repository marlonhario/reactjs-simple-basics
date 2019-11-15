// import React from 'react';
import React, { Component } from 'react';
import Ninjas from './ninja/Ninjas';
import AddNinja from './ninja/AddNinja';
import Todos from './todo/Todos';
import AddTodo from './todo/AddTodo';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

import Radium, { StyleRoot } from 'radium';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		ninjas : [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
			{ name: 'Crystal', age: 25, belt: 'pink', id: 3 }
		],
		todos: [
			{ id: 1, content: 'buy some milk' },
			{ id: 2, content: 'play mario kart' }
		],
		showPersons: false
	}


	addNinja = (ninja) => {
		// console.log(ninja); 
		ninja.id = Math.random();
		let ninjas = [...this.state.ninjas, ninja];
		this.setState({
			ninjas: ninjas
		})
	}



	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [ ...this.state.todos, todo ];
		this.setState({
			todos
		})
	}



	deleteNinja = (id) => {
		// console.log(id)
		let ninjas = this.state.ninjas.filter(ninja => {
			return ninja.id !== id
		});
		this.setState({
			ninjas: ninjas
		})
	}



	deleteTodo = (id) => {
		// console.log(id);
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		this.setState({
			todos
		})
	}



	componentDidMount(){
		console.log('component mounted')
	}

	componentDidUpdate(prevProps, prevState){
		console.log('component updated');
		console.log(prevProps, prevState);
	}


	switchNameHandler = (newName) => {
		// console.log('Was clicked!');
		// Don't do this: this.state.ninjas[0].name = 'Maximilian';
		this.setState({
			ninjas: [
				{ name: newName, age: 30, belt: 'black', id: 1 },
				{ name: 'Yoshi', age: 20, belt: 'green', id: 2 },
				{ name: 'Crystal', age: 25, belt: 'pink', id: 3 }
			]
		})
	}



	nameChangedHandler = (event) => {
		this.setState({
			ninjas: [
				{ name: 'newName', age: 30, belt: 'black', id: 1 },
				{ name: event.target.value, age: 20, belt: 'green', id: 2 },
				{ name: 'Crystal', age: 25, belt: 'pink', id: 3 }
			]
		})
	}


	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}






	// <Ninjas name="Ryu" age="25" belt="black" />
	render() {


		const style = {
			backgroundColor: 'green',
			color: 'white', 
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black'
			}
		}

		let persons = null;


		// let persons = this.state.showPersons ? ( <h1>
		// 			      						  	This will toggle!!
		// 			      						  </h1>
		// 			      						) : null;

		if (this.state.showPersons) {
			persons = (
				<h1>
				  	This will toggle!!
				</h1>
			);
			style.backgroundColor = 'red'
			style[':hover'] = {
				backgroundColor: 'pink',
				color: 'black'
			};
		}


		const classes = [];
		if (this.state.ninjas.length <= 2 && this.state.ninjas.length > 1 ) {
			classes.push('yellowC'); 
		}
		if (this.state.ninjas.length <= 1) {
			classes.push('redC');
		}

		return (
			<BrowserRouter>
				<StyleRoot>
					<div className="App container">
				      <Navbar />
				      <div className="row">
					      	<div className="col s3 collection">
					      		<Sidenav />
					      	</div>
					       	<div className="col s9">
								<Switch>
						      	  	<Route exact path="/" component={Home} />
							      	<Route path="/about" component={About} />
							      	<Route path="/contact" component={Contact} />
							      	<Route path="/example1" component={Contact} />
							      	<Route path="/:post_id" component={Post} />
						      	</Switch>
					      	</div>
				      </div>
				      
				      
				      
				      <button style={style} onClick={this.togglePersonsHandler}>Toggle</button>

				        {persons}

					  <h1 className={classes.join(' ')}>My first React app!</h1>
				      <p>Welcome </p>
				      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
				      <AddNinja addNinja={this.addNinja} /> 


				      <h1 className="center blue-text">Todos</h1>
				      <Todos todos={ this.state.todos }  deleteTodo={ this.deleteTodo }/>
				      <AddTodo addTodo={ this.addTodo } />
				    </div>
				</StyleRoot>
				
			</BrowserRouter>
	  	);
	}	
}

export default Radium(App);
