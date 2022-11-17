import React, {useState, useEffect} from 'react';
import { Row, Col, Image} from 'react-bootstrap';
import {db} from './firebase';
import {query, collection, onSnapshot} from 'firebase/firestore'
import { BsPatchPlus } from "react-icons/bs";
import {Link, Outlet} from 'react-router-dom'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'courses'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let courses = [];
            querySnapshot.forEach((doc) => {
                courses.push({ ...doc.data(), id: doc.id });               
            });
            setCourses(courses);
        });
      return () => unsubscribe();
    }, []);

return (
    <>
    <h2>Courses</h2>
      <Row>
        {courses.map((course) =>(
        <Col>
        <h2><BsPatchPlus/></h2>
        <Image style={{width: '300px'}} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
        <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
        <p>{course.courseDescription}</p>
        </Col>
        ))}
     </Row>
    <Outlet />
    </>
   );
};

export default Courses;