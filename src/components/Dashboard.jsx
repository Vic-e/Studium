import React from 'react'
import {Form, Accordion, Button} from 'react-bootstrap'
import AddVideo from './AddVideo'

function Dashboard() {
  return (
    <>
        <h2>Admin Dashboard</h2> 
        <Form>
            <fieldset>
            <h3>Create a Course</h3>
                <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button type="submit">   
                Submit
                </Button>      
           </fieldset>   
        </Form>   
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