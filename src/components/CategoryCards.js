import React from 'react'
import { Link } from 'react-router-dom';
import {Image, Col, Row, Button} from 'react-bootstrap';


const CategoryCards = () => {
  return (
      <div>
        <h2 className="mt-5" style={{textAlign:"left"}}>Categories</h2>
        <Row className="mt-4">
          <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
             <Link><h4 className="mt-3">Business</h4></Link>
           </Col>
           <Col xs={3}>
            <Image style={{ width: '18rem' }} src="https://tp7869.a2cdn1.secureserver.net/wp-content/uploads/2022/02/gaming-controller-1024x1024.jpg" />
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

export default CategoryCards;
