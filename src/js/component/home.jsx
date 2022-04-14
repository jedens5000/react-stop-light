import React from "react";
import { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("off");

	let red = "bg-danger rounded-circle";
	let yellow = "bg-warning rounded-circle";
	let green = "bg-success rounded-circle";
	let off = "bg-dark rounded-circle";

	return (
		<div className="cable">
			<div className="lightcable"></div>
			<div className="box">
				<div className="light" onClick={() => setColor("red")}>
					{color === "yellow" ||
					color === "green" ||
					color === "off" ? (
						<div className={red}></div>
					) : (
						<div className={`glowR ${red}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("yellow")}>
					{color === "red" || color === "green" || color === "off" ? (
						<div className={yellow}></div>
					) : (
						<div className={`glowY ${yellow}`}></div>
					)}
				</div>
				<div className="light" onClick={() => setColor("green")}>
					{color === "red" ||
					color === "yellow" ||
					color === "off" ? (
						<div className={green}></div>
					) : (
						<div className={`glowG ${green}`}></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
