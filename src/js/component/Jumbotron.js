import React from "react";

export default function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Landing Page React JS</h1>
			<p className="lead">
				This is an example landing page, built using React JS and
				bootstrap. Using several components making up rendered page.
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
