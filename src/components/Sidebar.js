import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Sidenav = (props) => {
	return (
		<div>
			<p><Link to="/example1">Example 1</Link></p>
  			<p><Link to="/example2">Example 2</Link></p>
		</div>
	)
}

export default withRouter(Sidenav)