import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Image from "../components/Image";
import Footer from '../components/Footer';
import photo from "../visuals/imageOfSelf.jpg"

export default function Home(props) {


   
  return (
    <div className='Home'  >
       
        <Image />
       
        <img id="self" src={photo} alt="Image of Mariyah" />
         <h1 id='name'>Mariyah Watson</h1>
        <About />
        
        <Skills skills={props.skills}/>
        <Education />
        <Footer />
    </div>
  )
}
