import React from 'react'
import {Form, Button} from 'react-bootstrap'
           
           
function AddVideo() {
         return (
            <>
                <Form>
                    <fieldset>
                    <h3>Add New Video</h3>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Video</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Video</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Thumbnail</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Length of Video</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Transcript</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                          <option>Choose a Course</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button type="submit">   
                        Submit
                        </Button>      
                    </fieldset>   
                    </Form>   
             </>
        );
    }
   
   
   export default AddVideo;