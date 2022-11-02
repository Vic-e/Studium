import React from 'react'
import { Row, Col, Button, Image} from 'react-bootstrap';

function Featured() {
    return (
        <div>
          <h2 style={{textAlign:"left"}}>Featured</h2>
          <Row>
              <Col sm={4}>
              <Image width={400} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
              </Col>
              <Col sm={8}>
            <h4 style={{justifyContent:"left"}}>Learn More of IP in Web 3</h4> 
              <p>Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
            <Button style={{textAlign:"left"}}>Watch Now</Button>
            </Col>
          </Row>
        </div>  
    );
  }
  
  export default Featured;