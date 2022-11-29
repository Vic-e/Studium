import React, {useState, useEffect, useContext} from 'react'
import {CourseContext} from '../App'
import {Accordion, Row, Col} from 'react-bootstrap'
import AddVideo from './AddVideo'
import AddCourse from './AddCourse'
import VidDashboard from './VidDashboard'
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
        <Row className="mt-5">
            <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h4>Update Course</h4></Accordion.Header>
                <Accordion.Body style={{backgroundColor: '#0F0C0E', color: '#ffffff'}}>
                  <ul>
                  {courses.map((course) =>(
                      <li>{course.courseName} {"  "} 
                      <Link to={`course/${course.id}/edit`}>Edit</Link> |
                      <Link onClick={() => deleteCourse(course.id)}> Delete</Link> 
                      </li>
                  ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </Col>
              <Col>
             <VidDashboard/>
          </Col>
          </Row>
        </main>
     );
 }


export default Dashboard;