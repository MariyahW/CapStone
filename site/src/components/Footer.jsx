import React from 'react'
import resume from '../../public/resume.pdf';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div id='Footer'>
{/* Link to download resume in footer of homepage */}

<Link id='fLink' to={resume} target="_blank" download>Download Full Resume</Link>

        
    </div>
  )
}
