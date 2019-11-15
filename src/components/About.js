import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam est sapiente </span></p>
		</div>
	)
}

export default Rainbow(About);