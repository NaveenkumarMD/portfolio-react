import React, { useState, useRef, useEffect, Children } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Blogsdata from '../Assets/Blogs/blogsdata.json'
import { useParams } from 'react-router-dom'
import MarkDown from 'markdown-to-jsx'
import '../Styles/Blogs.css'
function Blogspage() {
    const [blogs, setBlogs] = useState([])
    const [blogdata, setBlogdata] = useState([])
    const [blogcontent, setBlogcontent] = useState('')
    const routeparams = useParams()
    const blogid = routeparams.id
    const fetchblog = async (blogid) => {
        console.log("blog id is ", blogid)
        import(`../Assets/Blogs/${blogid}.md`).then(res => {
            fetch(res.default)
                .then(res => res.text()).then(data => {
                    setBlogcontent(data)
                })
        })
    }
    useEffect(() => {
        console.log(Blogsdata)
        setBlogs(Blogsdata.blogsdata)
        setBlogdata(Blogsdata.blogsdata.find(blog => blog.id === blogid))
        fetchblog(blogid)


    }, [])
    return (
        <div>
            <Navbar />
            <div className='md-content'>
                <MarkDown
options={{
    overrides: {
        h1: {
            component: Head1,
            props: {
                className: 'md-head1',
            },
        },
        p:{
            component: Para1,   
            props: {
                className: 'md-p1'
            }
        },
        h2:{
            component: Head2,
            props:{
                className: 'md-head2'
            }
        },
        h3:{
            component: Head3,
            props:{
                className: 'md-head3'
            }
        },
        a:{
            component: 'Anchor1',
            props:{
                href: '#',
                className: 'md-anchor1'
            }
        }
    },
}}
                >
                    {blogcontent}
                </MarkDown>
            </div>
            <Footer />
        </div>
    )
}

export default Blogspage

const Head1=({children,...props})=>{
    return(
        <div {...props}>
            {children}
        </div>
    )
}
const Head2=({children,...props})=>{
    return(
        <div {...props}>
            {children}
        </div>
    )
}
const Head3=({children,...props})=>{
    return(
        <div {...props}>
            {children}
        </div>
    )
}
const Para1=({children,...props})=>{
    return(
        <div {...props}>
            {children}
        </div>
    )
}
const Anchor1=({children,...props})=>{
    return(
        <a {...props}>
            {children}
        </a>
    )
}