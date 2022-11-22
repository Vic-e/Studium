import React, {useState, useEffect, useContext} from 'react';
import {CourseContext} from '../App'
import { Row, Col, Image} from 'react-bootstrap';
import { BsPatchPlus, BsFillPatchPlusFill } from "react-icons/bs";
import {Link, Outlet} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';  
import {db} from './firebase';
import {query, collection, onSnapshot, arrayUnion, doc, updateDoc} from 'firebase/firestore'


const Courses = () => {
    const {courses, setCourses} = useContext(CourseContext);

    const [choose, setChoose] = useState(false);
    const [fave, setFave] = useState(false);
    const { user } = UserAuth();


    // const courseList = courses.map((course) =>
    // )

    const userFaveCourses = doc(db, 'users', `${user.email}`)
    let xxx = `${courses.id}`
    const faveCourse = async () => {
      if(user.email) {
        setChoose(!choose)
        setFave(true)
        await updateDoc(userFaveCourses, {
          myCourses: arrayUnion,
          xxx: xxx
        })
      } else {
        alert('you must be loggedin to save courses to your watchlist.')
      }
    }

return (
    <main>
    <h2>Courses</h2>
      <Row>
        {courses.map((course) =>(
        <Col>
        <h4 style={{color: '#ffffff'}} onClick={fave}>
        {choose ? (
          <BsFillPatchPlusFill/>
          ):(
            <BsPatchPlus/>
          )}
          </h4 >
        <Image style={{width: '300px'}} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
        <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
        <p>{course.courseDescription}</p>
        </Col>
        ))}
     </Row>
    <Outlet />
    </main>
   );
};

export default Courses;