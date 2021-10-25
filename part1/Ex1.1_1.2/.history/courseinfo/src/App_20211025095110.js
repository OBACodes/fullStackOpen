import React, { Component } from "react";

function HeaderComponent(props) {
	console.log(props);
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	);
}

// function ContentComponent(props) {
//   return (

//   )
// }

// function TotalComponent(props) {
//   return (

//   )
// }

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<HeaderComponent course={course} />
			<p>
				{part1} {exercises1}
			</p>
			<p>
				{part2} {exercises2}
			</p>
			<p>
				{part3} {exercises3}
			</p>
			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
		</div>
	);
};

export default App;
