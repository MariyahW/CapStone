import React from 'react'
import Form from 'react-bootstrap/Form';


export default function Contact() {
  return (
    
        <>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </>
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
