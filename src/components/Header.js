import React, { Component} from 'react'
import Sidebar from './Sidebar'
import SignIn from './SignIn'
import {Row, Col, Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
      <header>
      <Container>
        <Row className="p-0">
          <Col xs lg="1" className="p-0">
              <Sidebar/>
            </Col>
            <Col>
                <h3>Studium</h3>
              </Col>
            <Col xs lg="4">
              <input type="search" value="Search" />
            </Col>
            <Col md="auto">
              <SignIn/>
            </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default Header;
