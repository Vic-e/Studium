import React from 'react'
import SingleCourse from './SingleCourse'
import { Row, Col, Image, Stack } from 'react-bootstrap';
import {UserAuth} from '../context/AuthContext'; 



const Student = () => {
  const { user } = UserAuth();

  return (
    <main>
    <Row>
      <Col xs={6} md={4}>
      <Image style={{ width:'200px' }} src="https://pbs.twimg.com/media/FDIw_DBaIAA5Eg-?format=jpg&name=small" rounded/>
      <h4>Username</h4>
      <h5>Membership Plan</h5>
      <h5>Member Since 2022</h5>
      <h6>Delete Account</h6>
      </Col>
      <Col>
      <h2>Watchlist</h2>
      </Col>
    </Row>
    </main>
  );
}

export default Student;
