import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost, updatePost } from '../actions/postActions'

class Post extends Component {

	/////////////////////////////
	// using componentDidMount //
	/////////////////////////////
	// // state = {
	// // 	id: null
	// // }
	
	// state = {
	// 	post: null
	// }

	// componentDidMount(){
	// 	// console.log(this.props);
	// 	let id = this.props.match.params.post_id;
	// 	axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
	// 		.then(res => {
	// 			this.setState({
	// 				post: res.data
	// 			})
	// 			// console.log(res)
	// 		})

	// 	// this.setState({
	// 	// 	id: id
	// 	// })
	// }



	handleClick = () => {
		this.props.deletePost(this.props.post.id);  
		this.props.history.push('/');
	}


	updateClick = () => {
		this.props.updatePost(this.props.post.id);  
		this.props.history.push('/');
	}


	render() {

		// <h4 className="center">{this.state.post.title}</h4>
		// <p>{this.state.post.body}</p>

		console.log(this.props)
		// const post = this.state.post ? (
		const post = this.props.post ? (
			<div className="post">
				<h4 className="center">{this.props.post.title}</h4>
				<p>{this.props.post.body}</p>
				<div className="center">
					<button className="btn grey" onClick={this.handleClick}>
						Delete Post
					</button>
					<button className="btn grey" onClick={this.updateClick}>
						Update Post
					</button>
				</div>
			</div>
		) : (
			<div className="center">Loading post</div>
		)



		return (
			<div className="container">
				{ post }
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find(post => post.id === id)
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
// 	}
// }


const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => { dispatch(deletePost(id)) },
		updatePost: (id) => { dispatch(updatePost(id)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)