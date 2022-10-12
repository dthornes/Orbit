import React, { useState } from "react";
import {
	animated,
	useChain,
	useSpring,
	useSpringRef,
	useTrail,
} from "react-spring";
export default function App() {
	const [on, toggle] = useState(false);

	const springRef = useSpringRef();
	const spring = useSpring({
		ref: springRef,
		from: { opacity: 0.5 },
		to: { opacity: on ? 1 : 0.5 },
		config: { tension: 250 },
	});

	const trailRef = useSpringRef();
	const trail = useTrail(5, {
		ref: trailRef,
		from: { fontSize: "10px" },
		to: { fontSize: on ? "35px" : "10px" },
	});

	useChain([springRef, trailRef]);

	return (
		<div>
			{trail.map((animation, index) => (
				<animated.div style={{ ...animation, ...spring }} key={index}>
					Hello World
				</animated.div>
			))}
			<button onClick={() => toggle(!on)}>toggle</button>
		</div>
	);
}
