import React from "react";

export default function Footer() {
	return (
		<footer id="sticky-footer" className="py-2 bg-dark text-white-50">
			<div className="container text-center text-white">
				<small>
					Copyright &copy;{" "}
					<a
						href="https://github.com/amafjarkasi/exercise-landing-page-with-react"
						className="text-white text-decoration-none"
						target="_new">
						Amaf Jarkasi
					</a>
				</small>
			</div>
		</footer>
	);
}
