import React from "react";

function HeaderComponent(props) {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	);
}

function Part1component(props) {
	return (
		<p>
			{props.part1} {props.exercises1}
		</p>
	);
}

function Part2component(props) {
	return (
		<p>
			{props.part2} {props.exercises2}
		</p>
	);
}

function Part3component(props) {
	return (
		<p>
			{props.part3} {props.exercises3}
		</p>
	);
}

function PontentComponent(props) {
	return (
		<>
			<part1component part1={props.part1} exercises1={props.exercises1} />
		</>
	);
}

function PotalComponent(props) {
	console.log(props);
	return (
		<p>
			Number of exercises{" "}
			{props.exercises1 + props.exercises2 + props.exercises3}
		</p>
	);
P

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
Pconst part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<HeaderComponent course={course} />
			<ContentComponent
				part1={part1}
P			part2={part2}
				part3={part3}
				exercises1={exercises1}
				exercises2={exercises2}
				exercises3={exercises3}
			></ContentComponent>
			<TotalComponent
				exercises1={exercises1}
P			exercises2={exercises2}
				exercises3={exercises3}
			/>
		</div>
	);
};

export default App;
