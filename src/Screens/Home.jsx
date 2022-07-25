import React from 'react'
import { ButtonBordered, ButtonFilled } from '../Components/Button'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'
import { BsArrowUpRight, BsInstagram, BsMedium } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import {RiWhatsappFill} from 'react-icons/ri'

import { FaLinkedinIn, FaExternalLinkSquareAlt } from "react-icons/fa";
import About from './About';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate()
    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-center'>
                <div className='text-green text1'>Hey dude! ✌️</div>
                <div className='text-white text2' style={{ marginTop: "6px" }}>I'm Naveenkumar M</div>
                <div className='text-gray text4' style={{ marginTop: "15px" }}>Full stack developer | Blogger | Tech enthusiast</div>
                <div className='home-page-btns'>
                    <ButtonFilled text="Lets talk" clickHandler={()=>navigate("/contact")} >
                        <BsArrowUpRight color='white' size={15} />
                    </ButtonFilled>
                    <ButtonBordered text="Projects" clickHandler={()=>navigate("/projects")}  >
                        <MdWorkOutline color='var(--fg-green)' size={20} />
                    </ButtonBordered>
                </div>
                <div className='home-social-icons'>
                    <div className='text5'>
                        Check out my
                    </div>
                    <div className='social-links'>

                        <div className='tooltip' onClick={() => window.open("https://wa.me/+918870499146")}>
                            <span class="tooltiptext">Whatsapp</span>
                            <RiWhatsappFill color='var(--fg-green)' size={20} />
                        </div>
                        <div className='tooltip' onClick={() => window.open("https://medium.com/@naveen9715568487", "_blank")}>
                            <span class="tooltiptext">Medium</span>
                            <BsMedium color='var(--fg-green)' size={18} />
                        </div>
                        <div className='tooltip' onClick={() => window.open("https://www.linkedin.com/in/naveenkumar-m-712612187/")}>
                            <span class="tooltiptext">Linkedin</span>
                            <FaLinkedinIn color='var(--fg-green)' size={18} />
                        </div>
                    </div>
                </div>
                {/* <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_v2eltxwm.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home
