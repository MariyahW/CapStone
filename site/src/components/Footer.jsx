import React from 'react'
import resume from '../../public/resume.pdf';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div id='Footer'>


<Link id='fLink' to={resume} target="_blank" download>Download Full Resume</Link>

        
    </div>
  )
}
