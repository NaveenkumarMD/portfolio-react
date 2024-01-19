import React from "react";
import "../Styles/Navbar.css";
const Footer = ({ position }) => {
	return (
		<div className={position !== "fixed" ? "footer" : "footer footer-fixed"}>
			<div>
                Made with <span role='img' aria-label='love'>❤️</span> by @ <span
					className='name-link'>Naveenkumar MD</span>
			</div>
		</div>
	);
};



export default Footer;
