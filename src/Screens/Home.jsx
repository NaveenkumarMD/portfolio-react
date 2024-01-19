import React, { useEffect,useRef } from "react";
import { ButtonBordered, ButtonFilled } from "../Components/Button";
import "../Styles/Home.css";
import { MdCloudDownload } from "react-icons/md";
import { BsArrowUpRight, BsMedium } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import HomePageSVG from "../Assets/homePage.svg";
import "aos/dist/aos.css";
import resumepdf from "../Assets/M_Naveenkumar_Resume.pdf";
function Home() {
	const navigate = useNavigate();
	const downloadlinkref=useRef();
	const homeContainerref = useRef();
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="home-container" ref={homeContainerref}>
			<div style={{display:"none"}}>	
				<a href={resumepdf} ref={downloadlinkref}></a>
			</div>
			<div className="home-center" data-aos="fade-right" aos-duration="1000">
				<div className="text-green text1">Hey dude! ✌️</div>
				<div className="text-white text2" style={{ marginTop: "6px" }}>
          I&apos;m Naveenkumar M
				</div>
				<div className="text-gray text4" style={{ marginTop: "15px" }}>
          Full stack developer | Blogger | Tech enthusiast
				</div>
				<div className="home-page-btns">
					<ButtonFilled
						text="Reume"
						clickHandler={() => downloadlinkref.current.click()}
					>
						<MdCloudDownload color="white" size={15} />
					</ButtonFilled>
					<ButtonBordered
						text="Projects"
						clickHandler={() => navigate("/projects")}
					>
						<MdWorkOutline color="var(--fg-green)" size={20} />
					</ButtonBordered>
				</div>
				<div className="home-social-icons">
					<div className="text" style={{ fontWeight: 500 }}>
            Check out my
					</div>
					<div className="social-links">
						<div
							className="tooltip"
							onClick={() => window.open("https://wa.me/+918870499146")}
						>
							<span className="tooltiptext">Whatsapp</span>
							<RiWhatsappFill color="var(--fg-green)" size={20} />
						</div>
						<div
							className="tooltip"
							onClick={() =>
								window.open("https://medium.com/@naveen9715568487", "_blank")
							}
						>
							<span className="tooltiptext">Medium</span>
							<BsMedium color="var(--fg-green)" size={18} />
						</div>
						<div
							className="tooltip"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/naveenkumar-m-712612187/"
								)
							}
						>
							<span className="tooltiptext">Linkedin</span>
							<FaLinkedinIn color="var(--fg-green)" size={18} />
						</div>
					</div>
				</div>
			</div>
			<div className="homepage-svg" data-aos="fade-left" aos-duration="1000">
				<img src={HomePageSVG}/>
			</div>

		</div>
	);
}

export default Home;
