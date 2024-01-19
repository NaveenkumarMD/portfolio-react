import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Styles/About.css";
import GitHubCalendar from "react-github-calendar";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from "@mui/material/Typography";
function About() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Navbar />

			<div className="a-content1">
				<div className="image-container">
					<img alt="Naveenkumar M" src={require("../Assets/pic.jpg")} />
				</div>
				<div className="a-content">
					<div className="text5">
            Experienced React Developer | Frontend Engineer
					</div>
					{/* <div className="text5">problem solver</div> */}
					<div className="text6">
            I am a dedicated React Developer with a strong passion for creating
            intuitive and engaging user interfaces. With a solid background in
            frontend development and expertise in React, I strive to deliver
            high-quality code and exceptional user experiences. I have a proven
            track record of developing reusable and efficient components,
            optimizing data flow, and collaborating effectively with
            cross-functional teams. I am constantly staying updated with the
            latest web technologies and trends to ensure the best practices in
            my work. If you are seeking a skilled React Developer who is
            committed to delivering impactful solutions, let&apos;s connect and
            explore opportunities!
					</div>
				</div>
			</div>

			<div className="quote-container">
				<div className="text">
          &quot;Courage isn&apost having the strength to go on - it is going on
          when you don&apos;t have strength&quot;
				</div>
				<div className="author">- Napolen - The Greatest Warrior</div>
			</div>
			<div className="github-calendarx">
				<GitHubCalendar
					username="NaveenkumarMD"
					style={{
						color: "white",
					}}
					color="#27C498"
					fontSize={16}
					blockMargin={6}
					showWeekdayLabels={false}
					blockSize={15}
				/>
			</div>
			<div className="education">
				<Timeline position="alternate">
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
							data-aos="fade-left"
						>
							<Typography className="text9">
                Paramveer matric Higher Secondary school
							</Typography>
							<Typography className="text9">
                Papparapatti-Dharmapuri Main road
							</Typography>
							<Typography className="text9">Papparapatti-636809</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-right"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-green)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-right"
							sx={{ py: "50px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                HIGH SCHOOL
							</Typography>
							<Typography className="marks">Percentage: 98%</Typography>
							<Typography className="year">Academic year :2016-2017</Typography>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
							data-aos="fade-right"
						>
							<Typography className="text9">
                Paramveer matric Higher Secondary school
							</Typography>
							<Typography className="text9">
                Papparapatti-Dharmapuri Main road
							</Typography>
							<Typography className="text9">Papparapatti-636809</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-left"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-gray)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-right"
							sx={{ py: "40px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                HIGHER SECONDARY
							</Typography>
							<Typography className="marks">Percentage: 89%</Typography>
							<Typography className="year">Academic year :2017-2019</Typography>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
							data-aos="fade-left"
						>
							<Typography className="text9">
                Coimbatore Institute of Technology
							</Typography>
							<Typography className="text9">Civil Aerodome Post</Typography>
							<Typography className="text9">Coimbatore-641014</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-right"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-green)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-right"
							sx={{ py: "40px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                UNDER GRADUATE
							</Typography>
							<Typography className="marks">CGPA:8.86</Typography>
							<Typography className="year">Academic year :2019-2023</Typography>
						</TimelineContent>
					</TimelineItem>

					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
							data-aos="fade-right"
						>
							<Typography className="text9">Koyo software Solutions</Typography>

							<Typography className="text9">Remote</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-left"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-gray)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-left"
							sx={{ py: "40px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                INTERN
							</Typography>
							<Typography className="marks">React JS intern</Typography>
							<Typography className="year">
                Duartion:Aug,2021 to Sep,2021
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							data-aos="fade-right"
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
						>
							<Typography className="text9">Gastos private limited</Typography>

							<Typography className="text9">Remote</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-right"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-green)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-right"
							sx={{ py: "40px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                INTERN
							</Typography>
							<Typography className="marks">Next JS intern</Typography>
							<Typography className="year">
                Duration: Feb,2022 to Mar,2022
							</Typography>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: "auto 0" }}
							align="right"
							variant="body2"
							color="gray"
							className="event-date"
							data-aos="fade-right"
						>
							<Typography className="text9">
                Striim Engineering services
							</Typography>
							<Typography className="text9">Chennai</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								data-aos="fade-left"
								sx={{ bgcolor: "var(--fg-green)" }}
							/>
							<TimelineDot
								sx={{
									bgcolor: "var(--fg-gray)",
									width: "10px",
									height: "10px",
								}}
							></TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent
							data-aos="fade-left"
							sx={{ py: "40px", px: 2, fw: "900" }}
						>
							<Typography className="event_name" component="span">
                INTERN
							</Typography>
							<Typography className="marks">Frontend developer</Typography>
							<Typography className="year">Currently working</Typography>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</div>
			<Footer />
		</div>
	);
}

export default About;
