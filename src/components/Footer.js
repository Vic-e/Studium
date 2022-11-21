import React, { Component} from 'react'
import { Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <footer>
     <Row>
      <Col>
        <h4>Studium</h4>
        <h5>FAQ</h5>
       <h5> &copy;Copyright 2022</h5>
      </Col>
      <Col>
       <h5> Privacy</h5>
       <h5>Terms & Conditions</h5>
      </Col>
      <Col>
        <h5>Connect</h5>
        <ul>
        <li>Black Web Fest</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>YouTube</li>
        </ul>
      </Col>
      </Row>
    </footer>
  );
}

export default Footer;
