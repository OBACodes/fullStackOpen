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
	return (
		<>
			<Part1component part1={props.part1} exercises1={props.exercises1} />
			<Part2component part2={props.part2} exercises2={props.exercises2} />
			<Part3component part3={props.part3} exercises3={props.exercises3} />
		</>
	);
}

function TotalComponent(props) {
	return (
		<p>
			Number of exercises{" "}
			{props.exercises1 + props.exercises2 + props.exercises3}
		</p>
	);
}

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<>
			<HeaderComponent course={course} />
			<Part1component part1={part1.name} exercises1={part1.exercises} />
		</>
	);
};

export default App;
