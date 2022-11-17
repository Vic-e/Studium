import React, { useState } from 'react';
import {Nav, Offcanvas, Button} from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom'

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Button onClick={handleShow}>
        &#xF479;
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link>
            <Link to="business">
              Business
            </Link>
              </Nav.Link>
            <Nav.Link>
            <Link to="gaming">
              Gaming
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="film">
              Film
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="web3">
            Web 3
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="webmonetization">
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
