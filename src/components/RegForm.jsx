import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RegForm() {
  return (
    <div>
        <h2>Register</h2>
        <Form>
            <fieldset>
            <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="fname" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lname" placeholder="Last Name" />
                </Form.Group> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>      
           </fieldset> 
           <Button type="submit">   
                Register
            </Button>   
        </Form>
        <h2>Already a member Sign-in{" "} 
        <Link to="/login">
                 here
                 </Link>.
        </h2>
    </div>
  );
}

export default RegForm;