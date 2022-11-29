import React from 'react'
import { Link } from 'react-router-dom';
import {Image, Col, Row, Button} from 'react-bootstrap';


const CategoryCards = () => {
  return (
      <div>
        <h2 className="mt-5" style={{textAlign:"left"}}>Categories</h2>
        <Row className="mt-4">
          <Col xs={6} lg={3}>
            <Image style={{ width: '100%' }} src="https://res.cloudinary.com/black-web-fest/image/upload/v1669655815/Studium/Business_ejbutv.jpg" />
             <Link><h4 className="mt-3">Business</h4></Link>
           </Col>
           <Col xs={6} lg={3}>
            <Image style={{ width: '100%' }} src="https://tp7869.a2cdn1.secureserver.net/wp-content/uploads/2022/02/gaming-controller-1024x1024.jpg" />
             <Link><h4 className="mt-3">Gaming</h4></Link>
           </Col>
           <Col xs={6} lg={3}>
            <Image style={{ width: '100%' }} src="https://res.cloudinary.com/black-web-fest/image/upload/v1669655815/Studium/Film_tus0zy.jpg" />
              <Link><h4 className="mt-3">Film</h4></Link>
           </Col>
           <Col xs={6} lg={3}>
            <Image style={{ width: '100%' }} src="https://res.cloudinary.com/black-web-fest/image/upload/v1669716472/Studium/Web3_Icons_acyvfc.jpg" />
             <h4 className="mt-3"><Link>Web 3</Link></h4> 
           </Col>
         </Row>
      </div>
    );
  }

export default CategoryCards;
