import React, { useState } from 'react';
import { BsPatchPlus, BsFillPatchPlusFill } from "react-icons/bs";
import { Row, Col, Image} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const OneCourse = ({ course }) => {
  const [choose, setChoose] = useState(false);
  const [faved, setFaved] = useState(false);
  const { user } = UserAuth();

  const userFaveCourses = doc(db, 'users', `${user?.email}`);

  const faveCourse = async () => {
    if (user?.email) {
      setChoose(!choose);
      setFaved(true);
      await updateDoc(userFaveCourses, {
        faveCourse : arrayUnion({
            id: course.id,
            image : course.courseImage,
            name: course.courseName,
            description: course.courseDescription,
        }),
      });
    } else {
      alert('you must be loggedin to save courses to your watchlist.');
    }
  };

  return (
    <>
        <Row>
            <Col>
            <Image style={{width: '300px'}} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
            <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
            <p>{course.courseDescription}</p>
            <h4 style={{color: '#ffffff'}} onClick={faveCourse}>
            {choose ? (
            <BsFillPatchPlusFill/>
            ):(
                <BsPatchPlus/>
            )}
            </h4>
            </Col>
        </Row>
    </>
  );
};

export default OneCourse;