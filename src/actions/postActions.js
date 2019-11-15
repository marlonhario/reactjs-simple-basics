export const deletePost = (id) => {
	return {
		type: 'DELETE_POST',
		id
	}
}

export const updatePost = (id) => {
	return {
		type: 'UPDATE_POST',
		id
	}
}