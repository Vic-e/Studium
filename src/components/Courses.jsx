import React, {useState, useEffect, useContext} from 'react';
import {CourseContext} from '../App'
import { Row, Col, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';  
import {db} from './firebase';
import OneCourse from './OneCourse'


const Courses = () => {
  const {courses, setCourses} = useContext(CourseContext);

  const xxx = () =>{
    
  }

return (
    <main>
    <h2>Courses</h2>
    <Row>
      <Col>
     <h3> <Badge>All Courses</Badge></h3>
     <h3> <Badge>Business</Badge></h3>
     <h3> <Badge>Gaming</Badge></h3>
     <h3> <Badge>Film</Badge></h3>
      </Col>
    </Row>
      <Row>
        {courses.map((course, id) =>(
          <Col>
            <OneCourse key={id} course={course} />
          </Col>
        ))}
        </Row>
    </main>
   );
};

export default Courses;