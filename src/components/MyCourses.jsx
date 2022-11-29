import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image} from 'react-bootstrap';
import { BsFillPatchPlusFill } from "react-icons/bs";
import { UserAuth } from '../context/AuthContext';
import { db } from './firebase';
import {  updateDoc, onSnapshot, doc } from 'firebase/firestore';


const MyCourses = (item) => {
  const [courses, setCourses] = useState([]);
  const { user } = UserAuth();


  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCourses(doc.data()?.myCourses);
      console.log(doc.data()?.myCourses)
    });
  }, [user?.email]);

  const myCourseRef = doc(db, 'users', `${user?.email}`)
  const deleteUrCourse = async (passedID) => {
      try {
        const result = courses.filter((course) => course.id !== passedID)
        await updateDoc(myCourseRef, {
            myCourses: result
        })
      } catch (error) {
          console.log(error)
      }
  }
  


  return (
    <>
   <Row>
         {courses.map((course, id) => (
          <Col xs={6} key={id} style={{width: '300px', marginRight: "70px"}} >
              <h4 style={{textAlign: 'right'}} onClick={()=> deleteUrCourse(course.id)}><BsFillPatchPlusFill/></h4>
              <Image style={{width: '300px'}} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
              <h3><Link to={`/courses/${course.id}`}>{course.name}</Link></h3>
          </Col>
            ))}
         </Row>
    </>
  );
};

export default MyCourses;




