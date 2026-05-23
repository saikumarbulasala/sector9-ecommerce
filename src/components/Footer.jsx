import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// Import Tooltip directly from Bootstrap
import { Tooltip } from "bootstrap";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(null);

	// Set the current year
	const getCurrentYear = () => {
		const dateNow = new Date();
		setCurrentYear(dateNow.getFullYear());
	};

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);

		getCurrentYear();

		// Cleanup tooltips on component unmount
		return () => {
			tooltipList.forEach((tooltip) => tooltip.dispose());
		};
	}, []);

	return (
		<footer className="mt-5 sec-padd" id="footer">
			<div className="container d-flex flex-wrap">
				<main className="col-12">
					<div className="row row-gap-5">
						{/* Logo and Description */}
						<article className="col-12 col-lg-6 text-center">
							<Link to="/" className="logo text-decoration-none text-dark">
								<h3 className="fs-3 mb-0">
									The <span className="fw-medium c-pink">Sector 9</span>
								</h3>
							</Link>
							<p className="mt-3">
								Sector 9 is a high-performance digital storefront engineered at the intersection of progressive street style and robust web architecture. Moving beyond traditional retail, our platform facilitates low-latency discovery and seamless access to hyper-curated apparel deployments. We cultivate a dynamic ecosystem built for a global subculture that demands technical precision, aesthetic curation, and absolute transactional confidence.
							</p>
						</article>

						{/* Social Links */}
						<div className="social col-12 col-lg text-center">
							<h3>COMPANY</h3>
							<ul className="ps-0 mt-3">
								<li>
									<NavLink
										to="/"
										className="text-decoration-none c-gray d-inline-block p-1 px-5"
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className="text-decoration-none c-gray d-inline-block p-1 px-5"
									>
										About us
									</NavLink>
								</li>
								<li className="c-gray p-1">Delivery</li>
								<li className="c-gray p-1">Privacy Policy</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="address col-12 col-lg text-center">
							<h3 className="mb-3">GET IN TOUCH</h3>
							<ul className="d-flex flex-column align-items-center align-items-lg-start ps-0 gap-2">
								<li className="c-gray">+91 9876543210</li>
								<li>
									<a
										className="c-gray text-decoration-none hover-underline"
										href="saikumarbulasala09@gmail.com"
										title="get in touch"
									>
										saikumarbulasala09@gmail.com
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/bulasala-sai-kumar-18b83a360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										target="_blank"
										title="Go To LinkedIn"
										className="text-decoration-none c-gray"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</main>

				{/* Copyright Information */}
				<div className="copyrights border-t-gray mt-5 pt-4 col-12 text-center c-d-gray">
					Copyright @{currentYear}
					<a
						href="https://www.linkedin.com/in/bulasala-sai-kumar-18b83a360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
						target="_blank"
						title="Go To LinkedIn"
						className="text-decoration-none c-black p-2 fw-bold"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
					>
						SaiKumar Bulasala
					</a>
					- All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
