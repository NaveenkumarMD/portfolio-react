import React, { useEffect } from 'react'
import { ButtonBordered, ButtonFilled } from '../Components/Button'
import Navbar from '../Components/Navbar'
import '../Styles/Home.css'
import { BsArrowUpRight, BsMedium } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import {RiWhatsappFill} from 'react-icons/ri'
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
    const navigate=useNavigate()
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='home-container'>
            <Navbar />
            <div className='home-center' data-aos="fade-right" aos-duration="1000p">
                <div className='text-green text1' >Hey dude! ✌️</div>
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
                    <div className='text5' style={{fontWeight:300}}>
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
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home
