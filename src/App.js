import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./Screens/About";
import Blogs from "./Screens/Blogs";
import Blogspage from "./Screens/Blogspage";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Projects from "./Screens/Projects";
import Resume from "./Screens/Resume";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import AnimatedCursor from "react-animated-cursor";
import { useRef } from "react";
const firebaseConfig = {
	apiKey: "AIzaSyDjSnxR7Fs31YaXpQcalFi-ybzDBgN8Rds",
	authDomain: "portfolio-4fdb4.firebaseapp.com",
	projectId: "portfolio-4fdb4",
	storageBucket: "portfolio-4fdb4.appspot.com",
	messagingSenderId: "933385500628",
	appId: "1:933385500628:web:13005e505cf9d9dbff4841",
	measurementId: "G-8EP1DE2QNM",
};
import { pdfjs } from "react-pdf";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url,
).toString();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
	const homeRef=useRef();
	const aboutRef=useRef();
	const projectsRef=useRef();
	const blogsRef=useRef();
	const contactRef=useRef();
	return (
		<BrowserRouter>
			<Navbar {...{homeRef,projectsRef,aboutRef,blogsRef,contactRef}}/>
			<div ref={homeRef}><Home /></div>
			<div ref={aboutRef}><About /></div>
			<div ref={projectsRef}><Projects/></div>
			<div ref={blogsRef}><Blogs/></div>
			<div ref={contactRef}><Contact/></div>
			<Footer/>
		</BrowserRouter>);
}

export default App;
export { app, db };
