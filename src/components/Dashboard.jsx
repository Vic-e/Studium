import React, {useState} from 'react'
import {Accordion} from 'react-bootstrap'
import AddVideo from './AddVideo'
import AddCourse from './AddCourse'

function Dashboard() {
  return (
    <>
        <h2>Admin Dashboard</h2>  
        <AddCourse />
        <AddVideo />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Update Course</Accordion.Header>
              <Accordion.Body>
                <ul>
                    <li>Course Name | Delete</li>
                    <li>Course Name | Delete</li>
                    <li>Course Name | Delete</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Update Video</Accordion.Header>
              <Accordion.Body>
              <ul>
                <li>Video Name | Delete</li>
                <li>Video Name | Delete</li>
                <li>Video Name | Delete</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
     );
 }


export default Dashboard;