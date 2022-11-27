import React from 'react'
import { Link } from 'react-router-dom';
import {Image, Row, Col, Button} from 'react-bootstrap';


const Recommended = () => {
  return (
<div>
        <h2 className="mt-5" style={{textAlign:"left"}}>Recommended</h2>
        <Row className="mt-4">
          <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
             <Link><h4 className="mt-3">Business</h4></Link>
           </Col>
           <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
             <Link><h4 className="mt-3">Gaming</h4></Link>
           </Col>
           <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
              <Link><h4 className="mt-3">Film</h4></Link>
           </Col>
           <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
             <h4 className="mt-3"><Link>Web 3</Link></h4> 
           </Col>
         </Row>
      </div>
);
}

export default Recommended;
