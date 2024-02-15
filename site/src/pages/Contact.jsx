import React from 'react'


export default function Contact() {
  return (
    <div className='form'>
    <form >
        <label htmlFor="name">Name</label>
       <input type="text" name="name" id="" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="" />
        <label htmlFor="contact">Contact Reason</label>
        <select name="contact" id="">
            <option value="default" selected disabled>Please Make A Selection</option>
            <option value="resume">Resume Inquiry</option>
            <option value="contract">Contract Work</option>
            <option value="other">Other (Please Explain)</option>
        </select>
            <input type="text" name="" id="" />
    

    </form>
    </div>
  )
}
