import React, { useState } from 'react';
import {Nav, Offcanvas, Button} from 'react-bootstrap';

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
            <Nav.Link>Business</Nav.Link>
            <Nav.Link>Gaming</Nav.Link>
            <Nav.Link>Film</Nav.Link>
            <Nav.Link>Web 3</Nav.Link>
          </Nav>
        </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
}

export default Sidebar;
