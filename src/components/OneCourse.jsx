import React, { useState } from 'react';
import { BsPatchPlus, BsFillPatchPlusFill } from "react-icons/bs";
import { Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from './firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const OneCourse = ({ course }) => {
  const [choose, setChoose] = useState(false);
  const [watchlist, setWatchlist] = useState(false);
  const { user } = UserAuth();

  const userFaveCourses = doc(db, 'users', `${user.email}`);

  const pickCourse = async () => {
    if (user.email) {
      setChoose(!choose);
      setWatchlist(true);
      await updateDoc(userFaveCourses, {
        myCourses : arrayUnion({
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
            <h4 style={{color: '#ffffff'}} onClick={pickCourse}>
            {choose ? (
            <BsFillPatchPlusFill/>
            ):(
                <BsPatchPlus/>
            )}
            </h4>
            <Image style={{width: '300px'}} src="https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png" />
            <h3><Link to={`${course.id}`}>{course.courseName}</Link></h3>
            <p>{course.courseDescription}</p>
    </>
  );
};

export default OneCourse;