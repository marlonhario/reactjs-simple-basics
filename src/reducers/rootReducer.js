const initState = {
	posts: [
		{id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus, omnis amet. Voluptates, placeat consequatur.'},
		{id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus, omnis amet. Voluptates, placeat consequatur.'},
		{id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus, omnis amet. Voluptates, placeat consequatur.'}
	]
}

const rootReducer = (state = initState, action) => {
	// console.log(action);
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter(post => {
			return action.id !== post.id
		})
		return {
			...state,
			posts: newPosts
		}
	}

	if (action.type === 'UPDATE_POST') {
		let updatePosts = state.posts.filter(post => {
			return action.id === post.id
		})
		return {
			...state,
			posts: updatePosts
		}
	}

	return state;
} 

export default rootReducer