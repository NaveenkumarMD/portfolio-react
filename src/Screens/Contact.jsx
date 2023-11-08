import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Contact.css'
import { FiCircle } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn} from "react-icons/fa";
import {  BsFillCircleFill, BsInstagram, BsMedium } from "react-icons/bs";
import {  db } from '../App'
import { collection,addDoc } from 'firebase/firestore'
import Mymodal from '../Components/Mymodal'
import {  Bars } from 'react-loader-spinner'
import sendMail from '../Functions/mailer';
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
function Contact() {
    const nameinputref = useRef(null)
    const contactpageref = useRef(null)
    const emailinputref = useRef(null)
    const messageinputref = useRef(null)
    const emailvalidref = useRef(null)
    const namevalidref = useRef(null)
    const likedvalidref = useRef(null)
    const messagevalidref = useRef(null)
    const [modalisopen, setmodalisopen] = useState(false)
    const [submitloading,setsubmitloading] = useState(false)
    const [Likedtags, setLikedtags] = useState([
        {
            "name": "Design",
            "isLiked": false
        }
        , {
            "name": "Content",
            "isLiked": false,
        },
        {
            "name": "Development style",
            "isLiked": false
        },
        {
            "name": "Blogs",
            "isLiked": false
        },
        {
            "name": "Projects",
            "isLiked": false
        },
        {
            "name": "Theme",
            "isLiked": false
        },
        {
            "name": "UI/UX",
            "isLiked": false
        },

    ])
    const [inputcontent, setInputcontent] = useState({
        name: "",
        email: "",
        message: "",

    })
    useEffect(() => {
        nameinputref.current.focus()
    }, [])

    const handleinputchange = (e) => {
        if (e.target.name === "name") {
            setInputcontent({
                ...inputcontent,
                name: e.target.value
            })
        }
        else if (e.target.name === "email") {
            setInputcontent({
                ...inputcontent,
                email: e.target.value
            })
        }
        else if (e.target.name === "message") {
            setInputcontent({
                ...inputcontent,
                message: e.target.value
            })
        }
    }
    const submit = async () => {
        setsubmitloading(true)
        let temp = [];
        Likedtags.map((tag) => {
            if (tag.isLiked === true) {
                temp.push(tag.name)
            }
        })
        const docdata = {
            ...inputcontent,
            likecontent: temp,
        }

        if (inputcontent.email.match(emailRegex) && inputcontent.name.length > 3 && inputcontent.message.length > 20) {
            try {
                await addDoc(collection(db, "contact"), docdata)
                console.log("Done")
                setInputcontent({
                    name: "",
                    email: "",
                    message: "",
                })
                setmodalisopen(true)
                sendMail(docdata.name,docdata.message,docdata.email)
                setsubmitloading(false)
            }
            catch (err) {
                setsubmitloading(false)
                console.log(err)
            }
        }
        else {

            setsubmitloading(false) 
            alert("Check all errors")
        }

    }
    useEffect(() => {
        namevalidref.current.style.display = "block"
        if (!inputcontent.name || inputcontent.name.length < 2) {
            namevalidref.current.style.color = "orange"
            namevalidref.current.innerHTML = "Le me address you properly😒"
        }
        else {
            namevalidref.current.style.color = "var(--fg-green)"
            namevalidref.current.innerHTML = "Thank you😊"
        }
    }, [inputcontent.name])
    useEffect(() => {
        emailvalidref.current.style.display = "block"

        if (inputcontent.email.match(emailRegex)) {
            emailvalidref.current.style.color = "var(--fg-green)"
            emailvalidref.current.innerHTML = "I won't make you wait so long💖"
        }
        else {
            emailvalidref.current.style.color = "orange"
            emailvalidref.current.innerHTML = "Not a spam, just a valid email😪"
        }
    }, [inputcontent.email])
    useEffect(() => {
        messagevalidref.current.style.display = "block"
        likedvalidref.current.style.display = "block"
        if (!inputcontent.message || inputcontent.message.length < 20) {
            messagevalidref.current.style.color = "orange"
            messagevalidref.current.innerHTML = "I know you can,be generous with the words😒"
        }
        else {
            messagevalidref.current.style.color = "var(--fg-green)"
            messagevalidref.current.innerHTML = "thanks for your time😎😎😎"
        }
    }, [inputcontent.message])

    return (
        <div ref={contactpageref}>
            <Navbar />
            <Mymodal open={modalisopen} setisopen={setmodalisopen} />
            <div className='loader'>

            </div>

            <div className="contact-container">
                <div className="c-title ">
                    wanna tell me something...
                </div>
                <div className='c-main'>
                    <div className='c-main-1'>
                        <div className='c-text1'>
                            tell me about something that attracts you the most
                        </div>
                        <div className='c-input-container'>
                            <div className='c-input'>
                                <label>name</label><br />
                                <input ref={nameinputref} type="text" placeholder="tell me your name" name='name'
                                    value={inputcontent.name}
                                    onChange={handleinputchange}
                                    onKeyPress={(e) => {
                                        if (e.key == "Enter") {
                                            emailinputref.current.focus()
                                        }
                                    }}
                                />
                                <div ref={namevalidref} className="validationstring"></div>
                            </div>
                            <div className='c-input'>
                                <label>e-mail address</label><br />
                                <input ref={emailinputref} type="text" placeholder="tell me your e-mail" name='email' onChange={handleinputchange}
                                    value={inputcontent.email}
                                    onKeyPress={(e) => {
                                        if (e.key == "Enter") {
                                            messageinputref.current.focus()
                                        }
                                    }}
                                />
                                <div ref={emailvalidref} className="validationstring"></div>
                            </div>
                        </div>
                        <div className='c-text1 question2'>
                            what kind of content do you like in this website?
                        </div>
                        <div className='interest-content'>
                            {
                                Likedtags && Likedtags.map((tag, index) => {
                                    return <Likedtag key={index} title={tag.name} likedarr={Likedtags} changelikedarr={setLikedtags} />
                                })
                            }

                        </div>
                        <div className='validationstring' ref={likedvalidref}></div>

                    </div>
                    <div className='c-main-2'>
                        <div className='c-text2'>
                            Ask the question and I'll answer it
                        </div>
                        <label className='textarea-label'>
                            what do you think about me?
                        </label><br/>
                        <textarea className='textarea' placeholder='type whatever you want to' name="message"
                            onChange={handleinputchange} ref={messageinputref}
                            value={inputcontent.message}
                        >

                        </textarea>
                        <div ref={messagevalidref} className="validationstring"></div>
                        <div className='home-social-icons'>
                            <div className='text5'>
                                Check out my
                            </div>
                            <div className='social-links social-linkss'>

                                <div className='tooltip' onClick={() => window.open("https://medium.com/@naveen9715568487", "_blank")}>
                                <span class="tooltiptext">Medium</span>
                                    <BsMedium color='var(--fg-green)' size={18} />
                                </div>
                                <div className='tooltip' onClick={() => window.open("https://www.linkedin.com/in/naveenkumar-m-712612187/")}>
                                <span class="tooltiptext">Linkedin</span>
                                    <FaLinkedinIn color='var(--fg-green)' size={18} />
                                </div>
                                <div className='tooltip' onClick={() => window.open("https://wa.me/+918870499146")}>
                                <span class="tooltiptext">Whatsapp</span>
                                    <RiWhatsappFill color='var(--fg-green)' size={20} />
                                </div>
                                <div className='tooltip' onClick={() => window.open()}>
                                <span class="tooltiptext">Instagram</span>
                                    <BsInstagram color='var(--fg-green)' size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='c-submit-bar'>
                <div></div>
                {
                    submitloading ?
                    <div className='bottom-loading'>  
                    <Bars
                            height="50"
                            width="50"
                            color='var(--fg-green)'
                            ariaLabel='loading'
                        />
                        </div>  :
                        <div className='c-submit-button' onClick={submit}>
                            submit
                        </div>
                }


            </div>
        </div>
    )
}

export default Contact

const Likedtag = ({ title, likedarr, changelikedarr }) => {
    const [isLiked, setIsLiked] = useState(false)
    const contentref = useRef(null)
    useEffect(() => {
        if (isLiked) {
            contentref.current.style.backgroundColor = '#27C498a3'
        }
        else {
            contentref.current.style.backgroundColor = 'var(--bg-black1)'
        }
        likedarr.map((tag) => {
            if (tag.name === title) {
                tag.isLiked = isLiked
            }
        })
        changelikedarr(likedarr)
    }, [isLiked])
    return (
        <div className='interest-tag'
            ref={contentref}
            onClick={() => {
                setIsLiked(!isLiked)
            }}
        >
            <FiCircle  size={15} />

            <div>
                {title}
            </div>
        </div>
    )
}
