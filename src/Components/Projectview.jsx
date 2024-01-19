import React from "react";
import "../Styles/Projectview.css";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { GoRepoForked } from "react-icons/go";
import { BsArrowUpRight } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Avatar from "react-avatar";
import "swiper/css/pagination";
import { IoMdSend } from "react-icons/io";
import { useRef } from "react";
import { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "5px",
		borderColor: "var(--bg-black1)",
		backgroundColor: "var(--bg-black1)",
		boxShadow: "0px 0px 20px 0px var(--bg-black1)",
	},
};
Modal.defaultStyles.overlay.backdropFilter = "blur(2px)";
Modal.defaultStyles.overlay.backgroundColor = "transparent";
function Projectview({ isopen, setisopen, data }) {
	const popupcommentcommentref = useRef(null);
	const popupcommentinputref = useRef(null);
	const popupcommentnameref = useRef(null);
	const finaltextref = useRef(null);
	const [name, setname] = useState("");
	const [comment, setcomment] = useState("");
	const [liked, setliked] = useState(false);
	const heartref = useRef(null);

	const commentsubmit = () => {
		if (comment.length < 5) {
			alert("Comment should be atleast 5 characters long");
			return;
		}
		// popupcommentcommentref.current.value=""
		popupcommentcommentref.current.classList.add("pv-comment-remove");
		popupcommentnameref.current.style.zIndex = "99";
	};
	const namesubmit = () => {
		if (name.length < 3) {
			alert("Name should be atleast 3 characters long");
			return;
		}
		popupcommentnameref.current.style.backgroundColor = "red";
		popupcommentnameref.current.style.display = "none";
		finaltextref.current.style.display = "flex";
	};
	console.log(data);
	return (
		<div>
			{data && (
				<>
					<Modal isOpen={isopen} ariaHideApp={false} style={customStyles}>
						<div className="pv-container">
							<div className="pv-close-icon" onClick={() => setisopen(false)}>
								<IoMdClose color="var(--fg-green)" size={20} />
							</div>
							<div className="pv-top">
								<div className="pv-top-content">
									<div className="pv-logo">
										{}
										<img src="" alt="Naveenkumar M" />
									</div>
									<div className="pv-header">
										<div className="pv-name">{}</div>
										<div className="pv-tag">webpage</div>
									</div>
								</div>
								<div>
									<div className="pv-btns-container">
										<div ref={heartref} className="pv-heart-container">
											{liked ? (
												<>
													<RiHeart3Fill color="var(--fg-green)" size={20} />
													<span className="pv-heart-count">{345}</span>
												</>
											) : (
												<>
													<RiHeart3Line
														color="white"
														size={20}
														onClick={() => setliked(true)}
													/>
													<span className="pv-heart-count">{345}</span>
												</>
											)}
										</div>
										<div className="pv-btns">
                      fork
											<GoRepoForked size={16} color="white" />
										</div>
										<div className="pv-btns btn-x">
                      view
											<BsArrowUpRight size={14} color="white" />
										</div>
									</div>
								</div>
							</div>
							<div className="pv-content">
								<div className="pv-description">
									<div className="pv-description-title">Description</div>
									<div className="pv-description-content">
										<div>
                      This is a web scraper that can scrape data from a webpage
                      and store it in a database.
										</div>
									</div>
								</div>
								<div className="pv-images">
									<div className="pv-description-title">Images</div>
									<div className="pv-images-content">
										<Swiper
											slidesPerView={2}
											spaceBetween={8}
											autoHeight={true}
											autoplay={{
												delay: 1000,
												disableOnInteraction: false,
											}}
											color="var(--fg-green)"
											pagination={{
												clickable: true,
											}}
											modules={[Pagination, Autoplay]}
											className="mySwiper"
										>
											<SwiperSlide>
												<img
													alt="Naveenkumar M"
													src={import("../Assets/Projects/Default/one.jpg")}
												/>
											</SwiperSlide>
											<SwiperSlide>
												<img
													alt="Naveenkumar M"
													src={import("../Assets/Projects/Default/two.jpg")}
												/>
											</SwiperSlide>
											<SwiperSlide>
												<img
													alt="Naveenkumar M"
													src={import("../Assets/Projects/Default/three.jpg")}
												/>
											</SwiperSlide>
											<SwiperSlide>
												<img
													alt="Naveenkumar M"
													src={import("../Assets/Projects/Default/four.jpg")}
												/>
											</SwiperSlide>
											<SwiperSlide>
												<img
													alt="Naveenkumar M"
													src={import("../Assets/Projects/Default/five.jpg")}
												/>
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
								<div className="pv-tags">
									<div className="pv-description-title">Tech stack</div>
									<div className="tech-stack-container">
										<Techstack name="react" />
									</div>
								</div>
								<div className="pv-comments">
									<div className="pv-description-title">Comments</div>
									<div>
										<div className="pv-comm1">
											<div className="pv-comment-avatar">
												<Avatar name="Naveen Kuamr" size={40} round={true} />
											</div>
											<div className="pv-comment-content">
												<div className="pv-comment-name">Naveen Kuamr</div>
												<div className="pv-comment-date">1 day ago</div>
											</div>
										</div>
										<div>
											<div className="pv-comment-text">
                        This is a web scraper that can scrape data from a
                        webpage and store it in a database.
											</div>
										</div>
									</div>
									<div>
										<div className="pv-comm1">
											<div className="pv-comment-avatar">
												<Avatar name="Naveen Kuamr" size={40} round={true} />
											</div>
											<div className="pv-comment-content">
												<div className="pv-comment-name">Naveen Kuamr</div>
												<div className="pv-comment-date">1 day ago</div>
											</div>
										</div>
										<div>
											<div className="pv-comment-text">
                        This is a web scraper that can scrape data from a
                        webpage and store it in a database.
											</div>
										</div>
									</div>
									<div>
										<div className="pv-comm1">
											<div className="pv-comment-avatar">
												<Avatar name="Naveen Kuamr" size={40} round={true} />
											</div>
											<div className="pv-comment-content">
												<div className="pv-comment-name">Naveen Kuamr</div>
												<div className="pv-comment-date">1 day ago</div>
											</div>
										</div>
										<div>
											<div className="pv-comment-text">
                        This is a web scraper that can scrape data from a
                        webpage and store it in a database.
											</div>
										</div>
									</div>
									<div>
										<div className="pv-comm1">
											<div className="pv-comment-avatar">
												<Avatar name="Naveen Kuamr" size={40} round={true} />
											</div>
											<div className="pv-comment-content">
												<div className="pv-comment-name">Naveen Kuamr</div>
												<div className="pv-comment-date">1 day ago</div>
											</div>
										</div>
										<div>
											<div className="pv-comment-text">
                        This is a web scraper that can scrape data from a
                        webpage and store it in a database.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="pv-add-comment-container"
								ref={popupcommentcommentref}
							>
								<div className="pv-comment-input">
									<input
										placeholder="Enter your comment..."
										value={comment}
										ref={popupcommentinputref}
										onChange={(e) => setcomment(e.target.value)}
										onKeyUp={(e) => {
											if (e.key === "Enter") {
												commentsubmit();
											}
										}}
									/>
								</div>

								<div className="pv-comment-send">
									<IoMdSend size={24} color="white" onClick={commentsubmit} />
								</div>
							</div>
							<div
								className="pv-add-comment-container1"
								ref={popupcommentnameref}
							>
								<div className="pv-comment-input">
									<input
										placeholder="How can I call you..."
										value={name}
										onChange={(e) => setname(e.target.value)}
										onKeyUp={(e) => {
											if (e.key === "Enter") {
												namesubmit();
											}
										}}
									/>
								</div>

								<div className="pv-comment-send">
									<IoMdSend size={24} color="white" onClick={namesubmit} />
								</div>
							</div>
							<div className="pv-add-comment-container2" ref={finaltextref}>
								<div>💕💕💕 thanks for your valuable time.💕💕💕</div>
							</div>
						</div>
					</Modal>
				</>
			)}
		</div>
	);
}

export default Projectview;
const Techstack = ({ name }) => {
	const bgcolorobj = {
		react: "#61dafb",
		node: "#61dafb",
		mongo: "#61dafb",
		mysql: "#61dafb",
		html: "#61dafb",
		css: "#61dafb",
		javascript: "#61dafb",
		firebase: "#61dafb",
		reactnative: "#61dafb",
		python: "#61dafb",
		django: "#61dafb",
		express: "#61dafb",
	};
	return (
		<div className="tech-stack-item">
			<div
				className="tech-stack-name"
				style={{
					backgroundColor: bgcolorobj[name],
				}}
			>
				{name}
			</div>
		</div>
	);
};
