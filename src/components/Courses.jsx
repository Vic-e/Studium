import React, {useState, useEffect, useContext} from 'react';
import {CourseContext} from '../App'
import { Row, Col, Image} from 'react-bootstrap';
import { BsPatchPlus, BsFillPatchPlusFill } from "react-icons/bs";
import {Link, Outlet} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';  
import {db} from './firebase';
import {query, collection, onSnapshot, arrayUnion, doc, updateDoc} from 'firebase/firestore'


const Courses = ( ) => {
    const {courses, setCourses} = useContext(CourseContext);

    const [choose, setChoose] = useState(false);
    const [fave, setFave] = useState(false);
    const { user } = UserAuth();


return (
    <main className="mt-5">
    <h2>Courses</h2>
      <Row>
        {courses.map((course) =>(
        <Col>
        <Image style={{width: '400px'}} src="https://res.cloudinary.com/black-web-fest/image/upload/v1669656709/Studium/studium-student-learning-online_kehpud.jpg" />
        <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
        <p>{course.courseDescription}</p>
        </Col>
        ))}
     </Row>
    </main>
   );
};

export default Courses;