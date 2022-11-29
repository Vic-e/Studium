import React, {useState, useEffect} from 'react';
import { Row, Col, Image} from 'react-bootstrap';
import { BsPatchPlus, BsFillPatchPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import {db} from './firebase';
import {query, collection, onSnapshot, arrayUnion, doc, where, getDocs} from 'firebase/firestore'


const BizCourses = ( ) => {

return (
    <main className="mt-5">
    <h2>Business Courses</h2>
      {/* <Row>
        {courses.map((course) =>(
        <Col>
        <Image style={{width: '300px'}} src="course.courseImage" />
        <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
        <p>{course.courseDescription}</p>
        </Col>
        ))}
     </Row> */}
    </main>
   );
};

export default BizCourses;