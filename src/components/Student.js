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
    <main className="mt-5">
    <Row>
      <Col style={{ width:'300px', background: '#0F0C0E'}}  xs={6} md={4}>
      <Image className="mx-auto d-block mt-5" style={{ width:'200px'}} src={thisUser.profilePic} rounded/>
        <div className="mx-auto" style={{ width:'250px' }}>
        <h4 className="mt-3">{thisUser.username}</h4>
        <h6>Plan Type: {thisUser.userType}</h6>
        <h6>Member Since: {date}</h6>
        {/* <h6>Delete Account</h6> */}
        </div>
      </Col>
      <Col>
        <div style={{ marginLeft: '50px'}} >
        <h2>Watchlist</h2>
        <MyCourses/>
        </div>
      </Col>
    </Row>
    </main>
  );
}

export default Student;
