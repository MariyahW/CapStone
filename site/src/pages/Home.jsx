import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Image from "../components/Image";

export default function Home() {
  return (
    <div className='Home'>
        <Image />
        <About />
        <Skills />
        <Education />
    </div>
  )
}
