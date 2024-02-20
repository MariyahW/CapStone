import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Contact() {
  return (
    <> 
  


    <div className="form" id="toUpdate"><Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>If you would like to update a previous form input your ID number.</Form.Label>
        <Form.Control type="text" id="objectID" placeholder="Enter ID" required/>
      </Form.Group>
      <Button variant="secondary" size="md"type="submit">
        Submit
      </Button>
      </div>
    <div className="form" id="formAdd">
      <Form.Group className="mb-3" controlId="formGroupText">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control type="text" placeholder="Enter name" id="name1" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" required>
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control id="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        {/* <Form.Label>Phone</Form.Label> */}
        <Form.Control id="phone" type="tel" placeholder="Enter phone number" required />
      </Form.Group>

      <Form.Select id="contactReason" aria-label="Default select example" required>
        <option selected disabled>
          Please Make A Selection
        </option>
        <option value="resume">Resume Inquiry</option>
        <option value="contract">Contract Work</option>
        <option value="other">Other</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>  </Form.Label>
        <Form.Control id="otherText" as="textarea" rows={3} />
      </Form.Group>
   
      <Button variant="secondary" size="md"type="submit">
        Submit
      </Button>
      
    </div>
    </>
  );
}

