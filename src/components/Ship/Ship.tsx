import React, { FC } from "react";
import { useSpring, animated } from "react-spring";
import "./ship.scss";

export const Ship: FC<{ orbiting: boolean }> = ({ orbiting }) => {
	const orbitAnimation = useSpring({
		loop: true,
		from: { transform: "rotate(0deg)" },
		to: { transform: "rotate(360deg)" },
		config: {
			velocity: 0.001,
			mass: 300,
			clamp: true,
		},
		cancel: !orbiting,
	});

	const leaveOrbitAnimation = useSpring({
		from: { transform: "translateX(0px)" },
		to: { transform: "translateX(500px)" },
		config: {
			velocity: 0.001,
			mass: 20,
			clamp: true,
		},
		pause: orbiting,
	});

	return (
		<animated.div className="ship__container" style={orbitAnimation}>
			<animated.div className="ship" style={leaveOrbitAnimation}>
				Ship
			</animated.div>
		</animated.div>
	);
};
