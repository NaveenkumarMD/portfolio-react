import React,{useEffect, useRef,useState} from 'react'
import Blogcontainer from '../Components/Blogcontainer'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Styles/Blogs.css'
import Blogsdata from '../Assets/Blogs/blogsdata.json'
import { MdMiscellaneousServices } from 'react-icons/md'
function Blogs() {
    const [selectedtag,setSelectedtag]=useState('all')
    const blogcontainerref=useRef(null)
    const allinkref=useRef(null)
    const javascriptlinkref=useRef(null)
    const pythonlinkref=useRef(null)
    const programminglinkref=useRef(null)
    const miscellaneouslinkref=useRef(null)
    const [blogs,setBlogs]=useState([])
    const clearselectedlinkstyles=()=>{
        allinkref.current.style.backgroundColor=""
        javascriptlinkref.current.style.backgroundColor=""
        pythonlinkref.current.style.backgroundColor=""
        programminglinkref.current.style.backgroundColor=""
        miscellaneouslinkref.current.style.backgroundColor=""
    }
    useEffect(()=>{
        console.log(Blogsdata)
       setBlogs(Blogsdata.blogsdata)
       console.log(blogs)
        clearselectedlinkstyles()
        if(selectedtag==='all'){
            allinkref.current.style.backgroundColor="var(--bg-black1)"
        }
        else if(selectedtag==='javascript'){
            javascriptlinkref.current.style.backgroundColor="var(--bg-black1)"
        }
        else if(selectedtag==='python'){
            pythonlinkref.current.style.backgroundColor="var(--bg-black1)"
        }
        else if(selectedtag==='programming'){
            programminglinkref.current.style.backgroundColor="var(--bg-black1)"
        }
        else if (selectedtag=="miscellaneous"){
            miscellaneouslinkref.current.style.backgroundColor="var(--bg-black1)"
        }
    },[selectedtag])
    return (
        <div className='blogs'>
            <Navbar />
            <div className='blogs-container'>
                <div className='title-blog text-white'>blogs</div>
                <div className='blogs-content'>
                    <div className="blogs-menu">
                        <div ref={allinkref} onClick={()=>setSelectedtag("all")}>all</div>
                        <div ref={javascriptlinkref} onClick={()=>setSelectedtag("javascript")}>javascript</div>
                        <div ref={pythonlinkref} onClick={()=>setSelectedtag("python")}>python</div>
                        <div ref={programminglinkref} onClick={()=>setSelectedtag("programming")}>programming</div>
                        <div ref={miscellaneouslinkref} onClick={()=>setSelectedtag("miscellaneous")}>miscellaneous</div>
                    </div>
                    <div className='blogs-flex'>
                        {
                           blogs && blogs.map((blog,index)=>{
                                if(selectedtag==='all'||blog.tag===selectedtag){
                                    return <Blogcontainer key={index} blog={blog}/>
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

export default Blogs
