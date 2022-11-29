import React, { useState, useEffect, useContext} from 'react'
import {db} from './firebase'
import {useParams, Link} from 'react-router-dom'
import { Row, Col} from 'react-bootstrap'
import {doc, getDoc} from 'firebase/firestore'
import Recommended from './Recommended'
import NextVideo from './NextVideo'

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
    //console.log(docSnap.data());
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
      <Row className="mt-5">
        <Col>
        <h2 style={{textAlign:"left"}}>{courseName}</h2>
   
        </Col>
        <Col>
        {/* I wanted the category to link to the other content but havent figured out the function to change it yet and populate. */}
        <h5 style={{textAlign:"right", color: '#A68863'}}>[ {category} ]</h5>
        </Col>
        <p> {courseDescription}</p>
      </Row>
    
        <NextVideo/>
      {/* if user is loggedin they see recommended based on category */}
      {/* <Recommended/> */}
  </main>
  );
}

export default SingleCourse;
