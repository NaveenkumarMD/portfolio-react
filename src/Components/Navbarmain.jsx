import React, { useEffect, useRef } from "react";
import "../Styles/Navbar.css";
import { FaGithubAlt } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsFillSquareFill } from "react-icons/bs";
import logo from "../Assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Navbarmain = () => {
	const location = useLocation();
	const homelinkref = useRef(null);
	const aboutlinkref = useRef(null);
	const projectlinkref = useRef(null);
	const contactlinkref = useRef(null);
	const bloglinkref = useRef(null);
	const resumelinkref = useRef(null);
	const navlogocontainerref = useRef(null);
	const alticonref = useRef(null);
	const linksref = useRef(null);
	useEffect(() => {
		let pathname = location.pathname;
		if (pathname === "/") {
			homelinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname === "/about") {
			aboutlinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname === "/projects") {
			projectlinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname === "/contact") {
			contactlinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname === "/blogs") {
			bloglinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname === "/resume") {
			resumelinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname == "/contact") {
			resumelinkref.current.style.backgroundColor = "var(--bg-black1)";
		} else if (pathname.includes("/blogs/")) {
			bloglinkref.current.style.backgroundColor = "var(--bg-black1)";
		}
	}, []);
	const navigate=path=>{
		console.log(path);
	};
	useEffect(() => {
		var logooffset = navlogocontainerref.current.getBoundingClientRect();

		const handlemousemove = (e) => {
			if (e.pageX < 125 && e.pageY < 90) {
				navlogocontainerref.current.style.height = "0px";
				alticonref.current.style.display = "block";
			} else {
				navlogocontainerref.current.style.height = "100%";
				alticonref.current.style.display = "none";
			}
		};
		document.onmousemove = handlemousemove;
		return () => {
			document.onmousemove = null;
		};
	}, []);
	// useEffect(()=>{
	//     const handlemousemove = (e) => {
	//         if(e.pageY<90){
	//             linksref.current.style.width="100%"
	//         }
	//         else{
	//             linksref.current.style.width="80px"
	//         }
	//     }
	//     document.onmousemove = handlemousemove
	// },[])

	return (
		<div className="navbar">
			<div className="nav-left">
				<div className="nav-left-logo">
					<img src={logo} alt="Naveenkumar M" ref={navlogocontainerref} />
					<div ref={alticonref} className="navbar-icon-alt">
						<BsFillSquareFill size={40} color="var(--fg-green)" />
					</div>
				</div>
				<div className="nav-left-links" ref={linksref}>
					<div ref={homelinkref} onClick={() => navigate("/")}>
            Home
					</div>
					<div ref={aboutlinkref} onClick={() => navigate("/about")}>
            About
					</div>
					<div ref={bloglinkref} onClick={() => navigate("/blogs")}>
            Blogs
					</div>

					<div ref={projectlinkref} onClick={() => navigate("/projects")}>
            Projects
					</div>
					<div ref={resumelinkref} onClick={() => navigate("/resume")}>
            Resume
					</div>
					<div ref={contactlinkref} onClick={() => navigate("/contact")}>
            Contact
					</div>
				</div>
			</div>

			<div className="nav-right">
				<div className="nav-right-links">
					<FaGithubAlt
						className="nav-right-links-icon"
						size={20}
						color="white"
						onClick={() => window.open("https://www.github.com/NaveenkumarMD")}
					/>
					<ImLinkedin2
						className="nav-right-links-icon"
						size={20}
						color="white"
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/naveenkumar-m-712612187/"
							)
						}
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbarmain;
