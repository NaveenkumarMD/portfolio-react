import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
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