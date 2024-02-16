import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="form">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" required>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" required />
      </Form.Group>

      <Form.Select aria-label="Default select example" required>
        <option selected disabled>
          Please Make A Selection
        </option>
        <option value="resume">Resume Inquiry</option>
        <option value="contract">Contract Work</option>
        <option value="other">Other</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="secondary" size="md"type="submit">
        Submit
      </Button>
      
    </div>
  );
}

//     <div className='form'>
//     <form >
//         <label htmlFor="name">Name</label>
//        <input type="text" name="name" id="" />
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="" />
//         <label htmlFor="phone">Phone</label>
//         <input type="tel" name="phone" id="" />
//         <label htmlFor="contact">Contact Reason</label>
//         <select name="contact" id="">
//             <option value="default" selected disabled>Please Make A Selection</option>
//             <option value="resume">Resume Inquiry</option>
//             <option value="contract">Contract Work</option>
//             <option value="other">Other (Please Explain)</option>
//         </select>
//             <input type="text" name="" id="" />

//     </form>
//     </div>

// )

// }
