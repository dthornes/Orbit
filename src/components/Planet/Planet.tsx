import React, { FC } from "react";
import "./planet.scss";
import "../Ship/ship.scss";
import Ship from "../Ship";

export const Planet: FC<{ orbiting: boolean; hasShip?: boolean }> = ({
	orbiting,
	hasShip,
}) => {
	return (
		<div className="orbit">
			{hasShip && <Ship orbiting={orbiting} />}
			<div className="planet" />
		</div>
	);
};
