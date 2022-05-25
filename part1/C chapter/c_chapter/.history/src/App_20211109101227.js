import React from "react";
import { useState } from "react";

const App = () => {
	  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

	};

	const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

	const handleRightClick = () =>
		setClicks({ ...clicks, right: clicks.right + 1 });

	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
			{clicks.right}
		</div>
	);
};

export default App;
