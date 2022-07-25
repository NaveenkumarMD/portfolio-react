import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Navbar.css'
import { FaGithubAlt } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import logo from '../Assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbarmain from './Navbarmain';
import Navmobile from './Navmobile';
function Navbar() {
    const [screenwidth, setscreenwidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            console.log(window.screen.width)
            setscreenwidth(window.screen.width)
        })
    }, [])
    return (
        <>
            {
                screenwidth >= 768 ? <Navbarmain /> : <Navmobile />
            }
        </>
    )

}

export default Navbar