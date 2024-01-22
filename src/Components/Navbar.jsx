import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import Navbarmain from "./Navbarmain";
import Navmobile from "./Navmobile";
function Navbar(props) {
	const [screenwidth, setscreenwidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", () => {
			setscreenwidth(window.screen.width);
		});
	}, []);
	return (
		<>
			{
				screenwidth >= 768 ? <Navbarmain {...{...props}} /> : <Navmobile {...{...props}} />
			}
		</>
	);

}

export default Navbar;