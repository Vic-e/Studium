import React from 'react'
import {Form, Button} from 'react-bootstrap'


function SignInForm() {
  return (
    <div>
        <h2>Sign-In</h2>
        <Form>
            <fieldset>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit">   
                Submit
                </Button>      
           </fieldset>   
        </Form>
        <h2>Register here</h2>
    </div>
  );
}

export default SignInForm;