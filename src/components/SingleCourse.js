import React, { useState, useEffect, useContext} from 'react'
import { Row, Col, Stack, Accordion} from 'react-bootstrap';
import NextVideo from './NextVideo';
import {db} from './firebase'
import {useLocation} from 'react-router-dom'
import {doc, collection, onSnapshot, getDocs} from 'firebase/firestore'

const SingleCourse = () => {
  const [courses, setCourses] = useState();
  const colRef = collection(db, 'courses')

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let courses = []
      snapshot.docs.forEach((doc) => {
        courses.push({ ...doc.data(), id: doc.id })
      })
    })
    .catch(err =>{
      console.log("there was an error.")
    })
     

  return (
   <div>
      <h2 style={{textAlign:"left"}}>CourseName</h2>
      <h4>Category:</h4>
        Lorem ipsum
      <h4>Course Description:</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Row>
        <Col>
          <video width="800" height="500" controls>
            <source src="" type="video/mp4"/>
          </video>
              <h3 style={{textAlign:"left"}}>Video Title</h3>
      </Col>
      <Col>
        <NextVideo/>
        <NextVideo/>
        <NextVideo/>
        <NextVideo/>
        <NextVideo/>
      </Col>
    </Row>
      <Stack className="vBody">
      <h4>Video Description:</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h4>Instructor(s): </h4>
        Lorem ipsum
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header><h4>Transcript:</h4></Accordion.Header>
        <Accordion.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      </Stack> 
      </div>
  );
}

export default SingleCourse;
