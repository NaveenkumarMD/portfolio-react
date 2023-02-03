import React, { useRef } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import resume from '../Assets/resume.svg'
import resumepdf from '../Assets/resume.pdf'
import '../Styles/Resume.css'
import { FiDownload } from "react-icons/fi";
function Resume() {
    const downloadlinkref = useRef(null)
    const download = () => {
        downloadlinkref.current.click()
    }
    return (
        <div>
            <Navbar />
            <a download ref={downloadlinkref} href={resumepdf} className="download-link">Downoad</a>
            <div className='resume-container'>
                <img src={resume} alt="Naveenkumar M" />
                <div className='download' onClick={download}>
                    pdf
                    <FiDownload size={16} color="white" />
                </div>
            </div>
            <div className='mob-download' onClick={download}>
                <div onClick={download}> <FiDownload size={16} color="white"  /> Download</div>

            </div>
            <Footer />
        </div>
    )
}

export default Resume
