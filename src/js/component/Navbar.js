import React from "react";

export default function Header() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Landing Page
			</a>
			<ul className="nav">
				<li className="nav-item">
					<a className="nav-link text-white bg-dark" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white bg-dark" href="#">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white bg-dark" href="#">
						Services
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white bg-dark" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
