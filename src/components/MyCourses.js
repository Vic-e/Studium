import React, { Component} from 'react'
import {Row, Col, Card} from 'react-bootstrap';

const MyCourses = () => {
  return (
    <div>
          <Row>
            <h4>My Courses</h4>
          <Col>
          <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
             <Card.Body>
               <Card.Title>Course Name</Card.Title>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
               <Button>Watch Now</Button>
             </Card.Body>
           </Card>
          </Col>
          </Row>
    </div>
  );
}

export default MyCourses;
