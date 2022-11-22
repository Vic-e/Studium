import React, { useState, useEffect, useContext} from 'react'
import {db} from './firebase'
import {useParams, Link} from 'react-router-dom'
import { Row, Col} from 'react-bootstrap';
import {doc, getDoc} from 'firebase/firestore'
import Recommended from './Recommended'
import NextVideo from './NextVideo';

const SingleCourse = () => {

  const {id} = useParams()

  const [courseName, setCourseName] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [category, setCategory] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const getData = async () => {
  const docRef = doc(db, 'courses', id)
  try {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    if(docSnap.exists()) {
      setCourseName(docSnap.data().courseName)
      setCourseImage(docSnap.data().courseImage)
      setCourseDescription(docSnap.data().courseDescription)
      setCategory(docSnap.data().category)
    }else {
      console.log("Document does not exist")
    }
  }catch(error) {
      console.log(error)
    }
  }

    useEffect (() =>{
      getData()
    },[]);

     

  return (
   <main>
      <Row>
        <Col>
        <h2 style={{textAlign:"left"}}>{courseName}</h2>
        </Col>
        <Col>
       <Link to="/courses/{category}"> <h6 style={{textAlign:"right"}}>Category[{category}]</h6></Link>
        </Col>
      </Row>
      <h4>Course Description:</h4>
        <p>{courseDescription}</p>
        <NextVideo/>
      {/* if user is loggedin they see recommended based on category */}
      <Recommended/>
  </main>
  );
}

export default SingleCourse;
