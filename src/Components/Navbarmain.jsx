import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Navbar.css'
import { FaGithubAlt } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import logo from '../Assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
const Navbarmain = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const homelinkref = useRef(null)
    const aboutlinkref = useRef(null)
    const projectlinkref = useRef(null)
    const contactlinkref = useRef(null)
    const bloglinkref = useRef(null)
    const resumelinkref = useRef(null)

    useEffect(() => {
        let pathname = location.pathname
        if (pathname === '/') {
            homelinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname === '/about') {
            aboutlinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname === '/projects') {
            projectlinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname === '/contact') {
            contactlinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname === '/blogs') {
            bloglinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname === '/resume') {
            resumelinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname == "/contact") {
            resumelinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (pathname.includes("/blogs/")) {
            bloglinkref.current.style.backgroundColor = "var(--bg-black1)"
        }
    }, [])
    useEffect(() => {

    }, [])
    return (

        <div className='navbar'>
            <div className='nav-left'>
                <div className='nav-left-logo'>
                    <img src={logo} />
                </div>
                <div className='nav-left-links'>
                    <div ref={homelinkref} onClick={() => navigate("/")}>Home</div>
                    <div ref={bloglinkref} onClick={() => navigate("/blogs")}>Blogs</div>
                    <div ref={aboutlinkref} onClick={() => navigate("/about")}>About</div>
                    <div ref={projectlinkref} onClick={() => navigate("/projects")}>Projects</div>
                    <div ref={resumelinkref} onClick={() => navigate("/resume")}>Resume</div>
                    <div ref={contactlinkref} onClick={() => navigate("/contact")}>Contact</div>
                </div>
            </div>
            <div className='nav-right'>
                <div className='nav-right-links'>
                    <FaGithubAlt className='nav-right-links-icon' size={20} color="white" onClick={() => window.open("https://www.github.com/NaveenkumarMD")} />
                    <ImLinkedin2 className='nav-right-links-icon' size={20} color="white" onClick={() => window.open("https://www.linkedin.com/in/naveenkumar-m-712612187/")} />
                </div>
            </div>
        </div>
    )
}
export default Navbarmain