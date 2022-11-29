import React, { useState } from 'react';
import {Nav, Offcanvas, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Button style={{margin: '0px', backgroundColor:"#e1c699"}} onClick={handleShow}>
        &#xF479;
        </Button>
        
        <Offcanvas style={{background: '#0F0C0E',  lineHeight: '50px', fontSize: '20px', paddingLeft: '40px'}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="mt-4">
        <h4>Categories</h4>
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="courses">
                All Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses/business">
                Business
              </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/courses/gaming">
              Gaming
            </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses/film">
                Film
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses/web3">
              Web 3
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses/webmonetization">
              Web Monetization
              </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default Sidebar;
