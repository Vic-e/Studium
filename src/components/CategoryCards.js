import React, { Component} from 'react'
import {Image, Card, Button} from 'react-bootstrap';


function CategoryCards() {
  return (
      <div>
        <h2 style={{textAlign:"left"}}>Categories</h2>
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Hong_Kong_2022_Lead_Image_2-2-1.jpg" />
           <Card.Body>
             <Card.Title>Topic</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
      </div>
    );
  }

export default CategoryCards;