import React, { useEffect } from 'react'
import { RiHeartFill } from "react-icons/ri";
import { GiRead } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Blogcontainer({ blog }) {
    const naviagate=useNavigate()
    const handleopen=()=>{
        naviagate(`/blogs/${blog.id}/${blog.name}`)
    }
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='blog-container' data-aos="zoom-in" onClick={handleopen}>
            <div className='blog-tag'>{blog.tag}</div>
            <div className='blog-title'>{blog.name}</div>
            <div className='blog-desc'>
                {blog.desc}
            </div>
            <div className='bottom-heart-container'>
                <div className='bottom-heart'>
                    <RiHeartFill size={16} />
                    <span>{blog.likes}</span>
                </div>
                <div className='bottom-heart'>
                    <GiRead size={16} />
                    <span>{blog.reads}</span>
                </div>

            </div>
        </div>
    )
}

export default Blogcontainer
