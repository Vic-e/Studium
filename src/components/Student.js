import React, {useState, useEffect} from 'react';
import MyCourses from './MyCourses';
import { Row, Col, Image} from 'react-bootstrap';
import {db} from './firebase';
import { UserAuth } from '../context/AuthContext';
import {doc, getDoc} from 'firebase/firestore'


const Student = () => {
  const [thisUser, setThisUser] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  

  const { user } = UserAuth();


  const getUser = async () => {
    const userRef = doc(db, 'users', `${user.email}`)
    try {
      const docSnap = await getDoc(userRef)
      if(docSnap.exists()) {
        setThisUser(docSnap.data());
        setDate(docSnap.data().dateCreated.toDate().toDateString());
      }else {
        console.log("User does not exist")
      }
    }catch(error) {
        console.log(error)
      }
    }
  
      useEffect (() =>{
          getUser();
          setIsLoading(false);
      },[setIsLoading]);


  return (
    <main>
    <Row>
      <Col xs={6} md={4}>
        <Image style={{ width:'200px' }} src={thisUser.profilePic} rounded/>
        <h4>{thisUser.username}</h4>
        <h5>Plan Type: {thisUser.userType}</h5>
        <h5>Member Since: {date}</h5>
        <h6>Delete Account</h6>
      </Col>
      <Col>
        <h2>Watchlist</h2>
        <MyCourses/>
      </Col>
    </Row>
    </main>
  );
}

export default Student;
