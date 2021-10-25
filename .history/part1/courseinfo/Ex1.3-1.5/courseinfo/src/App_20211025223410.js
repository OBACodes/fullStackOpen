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

function ContentComponent(props) {
	console.log(props);
	return (
		<>
			<Part1component
				part1={props.parts[0].name}
				exercises1={props.parts[0].exercises}
			/>
			<Part2component
				part2={props.parts[1].name}
				exercises2={props.parts[1].exercises}
			/>
			<Part3component
				part3={props.parts[2].name}
				exercises3={props.parts[2].exercises}
			/>
		</>
	);
}

function TotalComponent(props) {
	console.log(props);
	return (
		<p>
			Number of exercises{" "}
			{props.parts.parts[0].exercises +
				props.parts.parts[1].exercises +
				props.parts.parts[2].exercises}
		</p>
	);
}

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<>
			<HeaderComponent course={course} />
			<ContentComponent parts={parts} />
			<TotalComponent parts={parts} />
		</>
	);
};

export default App;
