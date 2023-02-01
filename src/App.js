import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import About from "./Screens/About";
import Blogs from "./Screens/Blogs";
import Blogspage from "./Screens/Blogspage";
import Contact from "./Screens/Contact";
import Home from './Screens/Home'
import Projects from "./Screens/Projects";
import Resume from "./Screens/Resume";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import AnimatedCursor from 'react-animated-cursor'
const firebaseConfig = {
  apiKey: "AIzaSyDjSnxR7Fs31YaXpQcalFi-ybzDBgN8Rds",
  authDomain: "portfolio-4fdb4.firebaseapp.com",
  projectId: "portfolio-4fdb4",
  storageBucket: "portfolio-4fdb4.appspot.com",
  messagingSenderId: "933385500628",
  appId: "1:933385500628:web:13005e505cf9d9dbff4841",
  measurementId: "G-8EP1DE2QNM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={13}
        outerSize={10}
        color='29,196,152'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/blogs/:id/:name" element={<Blogspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
export { app, db }
