import React from "react";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Body from "./Body";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<Jumbotron />
				<Body />
			</div>
			<p>&nbsp;</p>
			<Footer />
		</>
	);
}
