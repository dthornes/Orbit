import React, { useEffect, useState } from "react";
import Planet from "./components/Planet";
import "./App.css";

type PlanetsType = [
	{ orbiting: boolean },
	{ orbiting: boolean },
	{ orbiting: boolean }
];

function App() {
	const [orbiting, setOrbiting] = useState(true);
	const [planets, setPlanets] = useState<PlanetsType>([
		{ orbiting: true },
		{ orbiting: false },
		{ orbiting: false },
	]);

	const orbitNextPlanet = (planets: PlanetsType) => {
		const activePlanetIndex = planets.findIndex((planet) => planet.orbiting);
		planets.map((planet) => (planet.orbiting = false));
		const nextPlanetIndex =
			activePlanetIndex + 1 < planets.length ? activePlanetIndex + 1 : 0;

		planets[nextPlanetIndex].orbiting = true;

		return planets;
	};

	useEffect(() => {
		const onSpace = (event: KeyboardEvent) => {
			if (event.key === " ") {
				setOrbiting(false);
				setTimeout(() => {
					setOrbiting(true);
					setPlanets((planets) => orbitNextPlanet(planets));
				}, 500);
			}
		};
		window.addEventListener("keydown", onSpace);

		return () => window.removeEventListener("keydown", onSpace);
	}, []);

	return (
		<div className="App">
			<div className="game">
				<div className="solar-system">
					{planets.map((planet, index) => (
						<Planet
							key={index}
							orbiting={orbiting}
							hasShip={planets[index].orbiting}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
