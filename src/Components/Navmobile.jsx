import React, { useRef, useState, useEffect } from 'react'
import '../Styles/Navbarmobile.css'
import logo from '../Assets/logo.svg'
import { BiMenu } from "react-icons/bi";
import { TbBrandGithub, TbSmartHome } from "react-icons/tb";
import { ImBlogger } from "react-icons/im";
import { BsPerson, BsFileEarmarkCode, BsMedium, BsInstagram } from "react-icons/bs";
import { BiClipboard } from 'react-icons/bi'
import { GrProjects } from "react-icons/gr";
import { TbMessageCircle } from 'react-icons/tb'
import { RiPencilLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { GiEvilFork } from 'react-icons/gi';
import { ImCross } from "react-icons/im";
import { IoMdClose } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
function Navmobile() {
    const sidebaref = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    const homelinkref = useRef(null)
    const aboutlinkref = useRef(null)
    const projectlinkref = useRef(null)
    const contactlinkref = useRef(null)
    const bloglinkref = useRef(null)
    const resumelinkref = useRef(null)
    const [sidebarisopen, setsidebarisopen] = useState(false)
    const toggleSidebar = () => {
        setsidebarisopen(!sidebarisopen)
        if (sidebarisopen) {
            sidebaref.current.style.display = "none"
        }
        else {
            sidebaref.current.style.width = "200px"
            sidebaref.current.style.display = "block"
        }
    }
    useEffect(() => {
        const pathname = location.pathname
        if (pathname == "/") {
            homelinkref.current.classList.add("selected-fill")
        }
        else if (pathname === '/about') {
            aboutlinkref.current.classList.add("selected-fill")
        }
        else if (pathname === '/projects') {
            projectlinkref.current.classList.add("selected-fill")
        }
        else if (pathname === '/contact') {
            contactlinkref.current.classList.add("selected-fill")
        }
        else if (pathname === '/blogs') {
            bloglinkref.current.classList.add("selected-fill")
        }
        else if (pathname === '/resume') {
            resumelinkref.current.classList.add("selected-fill")
        }
        else if (pathname == "/contact") {
            resumelinkref.current.classList.add("selected-fill")
        }
        else if (pathname.includes("/blogs/")) {
            bloglinkref.current.classList.add("selected-fill")
        }
    }, [])
    return (
        <div className='mobile-nav'>
            <div className='mob-nav'>
                <div className='mob-nav-left'>
                    <img src={logo} />
                </div>
                <div className='mob-nav-right' onClick={toggleSidebar}>
                    {
                        sidebarisopen ?
                            <IoMdClose color='var(--fg-green)' size={28} />
                            :
                            <BiMenu color='var(--fg-green)' size={28} />
                    }


                </div>

            </div>
            <div className="sidebar" ref={sidebaref}>
                <div className='logo-mob'>
                    <img src={logo} />
                </div>
                <div>
                    <div className='mob-nav-links'>
                        <div className='mob-nav-link' ref={homelinkref} onClick={() => navigate("/")}>
                            <div>
                                <TbSmartHome size={20} color='#AFB1B8' />
                            </div>
                            <div>Home</div>
                        </div>
                        <div className='mob-nav-link' ref={bloglinkref} onClick={() => navigate("/blogs")}>
                            <div>
                                <RiPencilLine size={20} color='#AFB1B8' />
                            </div>
                            <div>Blogs</div>
                        </div>
                        <div className='mob-nav-link' ref={aboutlinkref} onClick={() => navigate("/about")}>
                            <div>
                                <BsPerson size={20} color='#AFB1B8' />
                            </div>
                            <div>
                                About
                            </div>
                        </div>
                        <div className='mob-nav-link' ref={projectlinkref} onClick={() => navigate("/projects")}>
                            <div>
                                <BsFileEarmarkCode size={20} color='#AFB1B8' />

                            </div>
                            <div>Projects</div>
                        </div>
                        <div className='mob-nav-link' ref={resumelinkref} onClick={() => navigate("/resume")}>
                            <div>
                                <BiClipboard size={20} color='#AFB1B8' />
                            </div>
                            <div >Resume</div>
                        </div>
                        <div className='mob-nav-link' ref={contactlinkref} onClick={() => navigate("/contact")}>
                            <div>
                                <TbMessageCircle size={20} color='#AFB1B8' />
                            </div>
                            <div>Contact</div>
                        </div>
                        {/* <div className="mob-nav-link">
                            <div>
                                <TbBrandGithub color="red" size={23}/>
                            </div>
                            <div>
                                <BsMedium color="red" size={23}/>
                            </div>
                            <div>
                                <BsInstagram color="red" size={23}/>
                            </div>
                            <div>
                                <FaLinkedin color="red" size={23}/>
                            </div>
                        </div> */}

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navmobile
