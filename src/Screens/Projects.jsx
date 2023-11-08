import React, { useEffect, useRef, useState } from 'react'
import Blogcontainer from '../Components/Blogcontainer'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Projectcontainer from '../Components/Projectcontainer'
import Projectview from '../Components/Projectview'
import '../Styles/Blogs.css'
import '../Styles/Projects.css'
import Projectdata from '../Assets/Projects/projects.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Projects({bodyRef}) {
    const [selectedtag, setSelectedtag] = useState('all')
    const allref = useRef(null)
    const websiteref = useRef(null)
    const appsref = useRef(null)
    const modulesref = useRef(null)
    const [projectopen,setprojectopen] = useState(false)
    const clearselectedlinkstyles = () => {
        allref.current.style.backgroundColor = ""
        websiteref.current.style.backgroundColor = ""
        appsref.current.style.backgroundColor = ""
        modulesref.current.style.backgroundColor = ""
    }
    useEffect(() => {
        AOS.init()
        clearselectedlinkstyles()
        if (selectedtag === "all") {
            allref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (selectedtag === "website") {
            websiteref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (selectedtag === "apps") {
            appsref.current.style.backgroundColor = "var(--bg-black1)"
        }
        else if (selectedtag === "modules") {
            modulesref.current.style.backgroundColor = "var(--bg-black1)"
        }
    }, [selectedtag])
    const [isProjectView, setIsProjectView] = useState(false)
    const openmodalwithdata=(data)=>{

        if (window.screen.width<700){
            return 
        }
        setIsProjectView(true)
        console.log("after click is ",data)
    }
    return (
        <div className='blogs'>
            <Navbar />
            <Projectview isopen={isProjectView} setisopen={setIsProjectView}  />
            <div className='blogs-container'>
                <div className='title-blog text-white' data-aos="fade-down">projects</div>
                <div className='blogs-content'>
                    <div className="blogs-menu" data-aos="fade-right">
                        <div ref={allref} onClick={() => setSelectedtag("all")}>all</div>
                        <div ref={websiteref} onClick={() => setSelectedtag("website")}>websites</div>
                        <div ref={appsref} onClick={() => setSelectedtag("app")}>apps</div>
                        <div ref={modulesref} onClick={() => setSelectedtag("module")}>modules</div>
                    </div>
                    <div className='blogs-flex'>
                        {
                            Projectdata.contents.map((item, index) => {
                                if (selectedtag == "all" || item.tag == selectedtag) {
                                    return (
                                        <Projectcontainer key={index} data={item}  />
                                    )
                                }
                            })
                        }

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
