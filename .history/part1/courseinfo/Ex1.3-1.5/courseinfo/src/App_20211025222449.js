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
			<Part1component part1={props.part1.name} exercises1={props.exercises} />
			<Part2component part2={props.name} exercises2={props.exercises} />
			<Part3component
				part3={props.part3.name}
				exercises3={props.part3.exercises}
			/>
		</>
	);
}

function TotalComponent(props) {
	return (
		<p>
			Number of exercises{" "}
			{props.part1.exercises + props.part2.exercises + props.part3.exercises}
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
			<ContentComponent part1={parts[0]} part2={parts[1]} part3={parts[2]} />
			<TotalComponent part1={parts[0]} part2={parts[1]} part3={parts[2]} />
		</>
	);
};

export default App;
