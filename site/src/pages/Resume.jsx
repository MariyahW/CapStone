import React from 'react';
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    const resume = '../../public/resume.pdf';
    return (
     <div className='PDF'>
     

     <iframe width="1500px"
            height="2000px"
             src={resume}
             title='Mariyah Watson Resume' />
     </div>
     );
    
}
