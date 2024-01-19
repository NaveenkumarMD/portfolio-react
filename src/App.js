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

const countUser = async () => {
	let token = localStorage.getItem("token");
	if (!token) {
		localStorage.setItem("token", "token");
		try {
			await addDoc(collection(db, "count"), { count: 1 });
		} catch (error) {
			console.log(error);
		}
	}
};
countUser();

function App() {
	const bodyRef = useRef();
	return (
		<BrowserRouter>
			<Navbar/>
			<Home/>
			<About/>
			<Blogs/>
			<Resume/>
			<Contact/>
			<Footer/>
		</BrowserRouter>	);
}

export default App;
export { app, db };
