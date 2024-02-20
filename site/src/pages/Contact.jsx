import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactReason, setContact] = useState('d');
  const [otherText, setText] = useState('');
  const [message, setMessage] = useState('');
  const[oID, setID]= useState('');

  const axiosGetData = async(_id)=>{
    await axios.get(`http://localhost:3000/contact/${_id}`)
    .then(res=>{
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setContact(res.data.contactReason);
      setText(res.data.testBox);
    })
  }

  const axiosPostData = async(options)=>{
    await axios.post("http://localhost:3000/contact", options)
    .then(res=>{
      setMessage(<p className="success">{res.data}</p>)
      
    }
      )
    
  }

  const axiosPutData = async(options, _id)=>{
    await axios.put(`http://localhost:3000/contact/${_id}`, options)
    .then(res=>{
      console.log(res.data);
      setMessage(<p className="success">Your information has been successfully updated</p>)
    })
  }

  const handleAdd = (event) =>{
    event.preventDefault();
    if(contactReason=='other'&&!otherText){
        setMessage(<p className="error">Other reason selected. Please input a message</p>);
    }else{
      setMessage('');
      const options = {
        name:name,
        email:email,
        phone:phone,
        contactReason:contactReason,
        textBox:otherText
      }
      axiosPostData(options);
     
    }
  }

  const getUpdate = event =>{
    event.preventDefault();
    console.log(event.target.value)
    axiosGetData(oID);
  }

  const handleUpdate = event=>{
    event.preventDefault();
    if(contactReason=='other'&&!otherText){
      setMessage(<p className="message">Other reason selected. Please input a message</p>);
  }else{
    setMessage('');
    const options = {
      name:name,
      email:email,
      phone:phone,
      contactReason:contactReason,
      textBox:otherText
    }
    axiosPutData(options, oID);
   
  }
  }
  return (
    <> 
  


    <div className="form" id="toUpdate"><Form.Group className="mb-3" >
        <Form.Label>If you would like to update a previous form input your ID number.</Form.Label>
        <Form.Control type="text" value={oID} onChange={(e)=>setID(e.target.value)} id="oID" placeholder="Enter ID" required/>
      </Form.Group>
      <Button onClick={getUpdate} variant="primary" size="md"type="submit">
        Submit
      </Button>
      </div>
    <div className="form" id="formAdd">
      <Form.Group className="mb-3" >
        <Form.Label> </Form.Label>
        <Form.Control type="text" placeholder="Enter name" id="name1" value={name} onChange={(e)=>setName(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3"  required>
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control id="email" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        {/* <Form.Label>Phone</Form.Label> */}
        <Form.Control id="phone" type="tel" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
      </Form.Group>

      <Form.Select id="contactReason" aria-label="Default select example" value={contactReason} onChange={(e)=>setContact(e.target.value)} required>
        <option value='d' disabled>
          Please Make A Selection
        </option>
        <option value="resume">Resume Inquiry</option>
        <option value="contract">Contract Work</option>
        <option value="other">Other</option>
      </Form.Select>
      <Form.Group className="mb-3" >
      <Form.Label>  </Form.Label>
        <Form.Control id="otherText" as="textarea" value={otherText} onChange={(e)=>setText(e.target.value)} rows={5} />
      </Form.Group>
              {message}
      <Button onClick={oID ==""?handleAdd:handleUpdate} variant="primary" size="md"type="submit">
        Submit
      </Button>
      
    </div>
    </>
  );
}

