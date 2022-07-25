import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/About.css'
import GitHubCalendar from 'react-github-calendar';
import { RiWhatsappFill } from 'react-icons/ri'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
function About() {
    return (
        <div >
            <Navbar />

            <div className='a-content1'>
                <div className='image-container'>
                    <img src={require("../Assets/pic.jpg")} alt="pic" />
                </div>
                <div className='a-content'>
                    <div className='text5'>
                        developer,designer
                    </div>
                    <div className="text5">problem solver</div>
                    <div className='text6'>
                        Still I can remember the days that I was teaching <span className='highlight'>Python</span> to myself like a Kindergarten teacher. I was very much interested doing things at very less amount of human efforts.I was making programs to solve my complex mathematical problems. I was 17 and had was new into <span className='hightlight'>programming.</span> I was a great challenge for me to understand the programming concepts and to code efficiently . While <span className='highlight'>java,C,C++ </span>were my college commpanions.

                        Then I made my way towards web development with <span className="highlight">HTML ,CSS ,javascript and PHP </span> .That was very hard for me until I had a look into <span className="highlight">react and node js .</span>That appeared to be a boon and started working with it and the path continues. I have been exploring all the hooks and corners of javascript .I have explored from <span className="highlight">Electron</span> for dektop applications to <span className="highlight">React native</span>  for mobile applications.At times I also work with <span className="highlight">Python</span>  to create some awesome codes to automate things to play around it.

                    </div>
                </div>
            </div>


            <div className='quote-container'>
                <div className='text'>
                    "Courage isn't having the strength to go on - it is going on when you don't have strength"
                </div>
                <div className='author'>
                    - Napolen - The Greatest Warrior
                </div>
            </div>
            <div className='github-calendarx'>

                <GitHubCalendar username="NaveenkumarMD" style={{
                    color: "white",

                }}
                    color="#27C498"
                    fontSize={16}
                    blockMargin={6}
                    showWeekdayLabels={false}
                    blockSize={15}
                />

            </div>
            <div className='education'>
                <Timeline position="alternate">

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="gray"
                            className='event-date'
                        >

                            <Typography className="text9">Paramveer matric Higher Secondary school

                            </Typography>
                            <Typography className="text9">Papparapatti-Dharmapuri Main road</Typography>
                            <Typography className="text9">Papparapatti-636809</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: "var(--fg-green)" }} />
                            <TimelineDot sx={{
                                bgcolor:"var(--fg-green)",
                                width:"10px",
                                height:"10px"
                            }}
                            >
                               
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "50px", px: 2, fw: "900" }}>
                            <Typography className="event_name" component="span">
                                HIGH SCHOOL
                            </Typography>
                            <Typography className='marks'>Percentage: 98%</Typography>
                            <Typography className='year'>Academic year :2016-2017</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                    <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="gray"
                            className='event-date'
                        >

                            <Typography className="text9">Paramveer matric Higher Secondary school

                            </Typography>
                            <Typography className="text9">Papparapatti-Dharmapuri Main road</Typography>
                            <Typography className="text9">Papparapatti-636809</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: "var(--fg-green)" }}  />
                            <TimelineDot sx={{
                                bgcolor:"var(--fg-gray)",
                                width:"10px",
                                height:"10px"
                            }}>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "40px", px: 2, fw: "900" }}>
                            <Typography className="event_name" component="span">
                                HIGHER SECONDARY
                            </Typography>
                            <Typography className='marks'>Percentage: 89%</Typography>
                            <Typography className='year'>Academic year :2017-2019</Typography>
                        </TimelineContent>
                    </TimelineItem>

        
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="gray"
                            className='event-date'
                        >

                            <Typography className="text9">Coimbatore Institute of Technology

                            </Typography>
                            <Typography className="text9">Civil Aerodome Post</Typography>
                            <Typography className="text9">Coimbatore-641014</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: "var(--fg-green)" }} />
                            <TimelineDot
sx={{
    bgcolor:"var(--fg-green)",
    width:"10px",
    height:"10px"
}}
                            >

                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "40px", px: 2, fw: "900" }}>
                            <Typography className="event_name" component="span">
                                UNDER GRADUATE
                            </Typography>
                            <Typography className='marks'>CGPA:8.86</Typography>
                            <Typography className='year'>Academic year :2019-2023</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                    <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="gray"
                            className='event-date'
                        >

                            <Typography className="text9">Koyo software Solutions

                            </Typography>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: "var(--fg-green)" }} />
                            <TimelineDot sx={{
                                bgcolor:"var(--fg-gray)",
                                width:"10px",
                                height:"10px"
                            }}>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "40px", px: 2, fw: "900" }}>
                            <Typography className="event_name" component="span">
                                INTERN
                            </Typography>
                            <Typography className='marks'>React JS intern</Typography>
                            <Typography className='year'>Duartion:Aug,2021 to Sep,2021</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: "auto 0" }}
                            align="right"
                            variant="body2"
                            color="gray"
                            className='event-date'
                        >

                            <Typography className="text9">Gastos private limited

                            </Typography>

                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineConnector sx={{ bgcolor: "var(--fg-green)" }} />
                            <TimelineDot
sx={{
    bgcolor:"var(--fg-green)",
    width:"10px",
    height:"10px"
}}
                            >

                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: "40px", px: 2, fw: "900" }}>
                            <Typography className="event_name" component="span">
                                INTERN
                            </Typography>
                            <Typography className='marks'>Next JS intern</Typography>
                            <Typography className='year'>Duration: Feb,2022 to Mar,2022</Typography>
                        </TimelineContent>
                    </TimelineItem>

                
                </Timeline>
            </div>
            <Footer />

        </div>
    )
}

export default About
