import React, { Component} from 'react'
import {Image, Row, Col, Button} from 'react-bootstrap';

function Featured() {
    return (
      <div>
        <div>
        <Image /> 
        text overlay
        <h1>Curated Courses Crafted for Creators</h1>
        <h2 style={{textAlign:"left"}}>Featured</h2>
        <Row>
            <Col>
            <Image />
            </Col>
            <Col>
           <h4 style={{justifyContent:"left"}}>Learn More of IP in Web 3</h4> 
            <p>Some quick example text to build on the card title and make up the
           bulk of the card's content.</p>
           <Button style={{textAlign:"left"}}>Watch Now</Button>
           </Col>
        </Row>
        </div>  
      </div>
    );
  }
  
  export default Featured;