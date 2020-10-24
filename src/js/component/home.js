import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";

//create your first component
export function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<Jumbotron />
			</div>
		</>
	);
}
