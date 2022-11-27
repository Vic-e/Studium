import React, {useState, useEffect, useContext} from 'react'
import {CourseContext} from '../App'
import {Accordion, Row, Col} from 'react-bootstrap'
import AddVideo from './AddVideo'
import AddCourse from './AddCourse'
import {db} from './firebase';
import {query, doc, collection, onSnapshot, deleteDoc} from 'firebase/firestore'
import {Link} from 'react-router-dom'


const Dashboard = () => {
  const {courses, setCourses} = useContext(CourseContext);

  //delete a course
  const deleteCourse = async(id) => {
    await deleteDoc(doc(db, 'courses', id))
  }

  return (
    <main className="mt-5">
        <h2>Admin Dashboard</h2>  
        <AddCourse />
        <AddVideo />
        <Row>
            <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Update Course</Accordion.Header>
                <Accordion.Body>
                  <ul>
                  {courses.map((course) =>(
                      <li>{course.courseName}
                      <Link to={`${course.id}/edit`}>Edit</Link> |
                      <Link onClick={() => deleteCourse(course.id)}> Delete</Link> 
                      </li>
                  ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </Col>
              <Col>
              <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Update Video</Accordion.Header>
                <Accordion.Body>
                <ul>
                  <li>Video Name
                    <Link to={{}}> Edit </Link> |
                    <Link to={{}}> Delete</Link>
                  </li>
                  <li>Video Name | Delete</li>
                  <li>Video Name | Delete</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          </Row>
        </main>
     );
 }


export default Dashboard;