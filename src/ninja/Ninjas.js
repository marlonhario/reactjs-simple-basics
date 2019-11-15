import React from 'react';
import { Link } from 'react-router-dom'

const Ninjas = ({ninjas, deleteNinja}) => {
	// <div>Name: { this.props.name }</div>
	// console.log(this.props);
	// destructuring 
	// const { name, age, belt } = this.props;
	// const { ninjas } = props;



	////////////////////////
	// using if statement //
	////////////////////////
	const ninjasList = ninjas.map(ninja => {
		// if (ninja.age > 20) {
		// 	return(
		// 		<div className="ninja" key={ninja.id}>
		// 			<div>Name: { ninja.name }</div>
		// 			<div>Age: { ninja.age }</div>
		// 			<div>Belt: { ninja.belt }</div>
		// 			<button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
		// 		</div>
		// 	)
		// } else {
		// 	return null;
		// }
			return(
				<div className="ninja" key={ninja.id}>
					<div>Name: { ninja.name }</div>
					<div>Age: { ninja.age }</div>
					<div>Belt: { ninja.belt }</div>
					<button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
				</div>
			)
	})



	////////////////////////////
	// using turnary operator //
	////////////////////////////
	// const ninjasList = ninjas.map(ninja => {
	// 	return ninja.age > 20 ? (
	// 		<div className="ninja" key={ninja.id}>
	// 			<div>Name: { ninja.name }</div>
	// 			<div>Age: { ninja.age }</div>
	// 			<div>Belt: { ninja.belt }</div>
	// 		</div>
	// 	) : null
	// })	



	// return(
	// 	<div className="ninja">
	// 		<div>Name: { name }</div>
	// 		<div>Age: { age }</div>
	// 		<div>Belt: { belt }</div>
	// 	</div>
	// )



	

	//////////////////////////
	// redirect conditional //
	//////////////////////////
	// return (
	// 	<div className="ninja-list">
	// 		{
	// 			ninjas.map(ninja => {
	// 				return ninja.age > 20 ? (
	// 					<div className="ninja" key={ninja.id}>
	// 						<div>Name: { ninja.name }</div>
	// 						<div>Age: { ninja.age }</div>
	// 						<div>Belt: { ninja.belt }</div>
	// 					</div>
	// 				) : null
	// 			})	
	// 		}
	// 	</div>
	// )




	return (
		<div className="ninja-list">
			{ ninjasList }
		</div>
	)

}

export default Ninjas;