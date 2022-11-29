import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
     <Row>
      <Col>
      <Link to="/">
                <h4>Studium Digital</h4>
      </Link>
       <h5> &copy;Copyright 2022</h5>
      </Col>
      <Col>
       <h5>Pricing</h5>
       <h5>FAQ</h5>
       <h5> Privacy</h5>
       <h5>Terms & Conditions</h5>
      </Col>
      <Col>
        <h5>Connect</h5>
        <Row>
        <Col xs={3}><a href="https://mobile.twitter.com/blackwebfest"><BsTwitter/></a></Col>
        <Col xs={3}><a href="https://www.facebook.com/BlackWebFest/"><BsFacebook/></a></Col>
        <Col xs={3}><a href="https://www.instagram.com/blackwebfest/"><BsInstagram/></a></Col>
        <Col xs={3}><a href="https://www.youtube.com/channel/UCmofYkvrUe3GABIFyZwitdA"><BsYoutube/></a></Col>
        </Row>
      </Col>
      </Row>
    </footer>
  );
}

export default Footer;
