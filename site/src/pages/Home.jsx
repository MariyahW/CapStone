import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Image from "../components/Image";
import Footer from '../components/Footer';
import photo from "../visuals/imageOfSelf.jpg"
// import bg from "../visuals/coding_image.jpg";
export default function Home() {


   
  return (
    <div className='Home'  >
       
        <Image />
        <h1 id='name'>Mariyah Watson</h1>
        <img id="self" src={photo} alt="Image of Mariyah" />
        <About />
        
        <Skills />
        <Education />
        <Footer />
    </div>
  )
}
