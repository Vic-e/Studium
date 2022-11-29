import React from 'react'
import { Row, Col, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Featured = () => {
    return (
        <div>
          <h2 className="mt-5" style={{textAlign:"left"}}>Featured</h2>
          <Row className="mt-4">
              <Col xs={12} sm={12} md={6} lg={4}>
              <Image width={400} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
              </Col>
              <Col xs={12} sm={12}  md={6} lg={8}>
            <h3 style={{justifyContent:"left"}}>Learn More About Web Monetization</h3> 
              <p>Monique T. Marshall from Black to Business moderates a panel with creatives and experts in the web monetization space, Tseli Thabane, General Manager, Coil South Africa and Briana Ashley Stuart, Founder &amp; Creative Director of Stu Arts Dance.</p>
              <Link to="/courses/6axY3FgaCU4nGtGwvpts"><Button style={{textAlign:"left", backgroundColor:"#e1c699", color:"#000000",}}> Watch Now</Button></Link>
            </Col>
          </Row>
        </div>  
    );
  }
  
  export default Featured;