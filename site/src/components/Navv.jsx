import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import resume from '../../public/resume.pdf';

export default function Navv() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="contact">Contact Me</Nav.Link>
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="blog">Exclusively Mariyah</Nav.Link>
                <Nav.Link to={resume} target="_blank" download>Download Full Resume</Nav.Link>
                <NavDropdown title="See My Work" id="basic-nav-dropdown">
                 
                  <NavDropdown.Item href="https://github.com/MariyahW" target="_blank">Github</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://exercism.org/profiles/MariyahW" target="_blank">
                    Exercism
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.freecodecamp.org/MariyahW" target="_blank">Free Code Camp</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.linkedin.com/in/mariyahwatson" target="_blank">LinkedIn</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    