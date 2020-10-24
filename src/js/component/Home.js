import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Body from "./Body";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<p>&nbsp;</p>
			<div className="container">
				<Jumbotron />
				<Body />
			</div>
			<p>&nbsp;</p>
			<Footer />
		</>
	);
}
