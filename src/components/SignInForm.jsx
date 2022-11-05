import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
                Sign-In
                </Button>      
           </fieldset>   
        </Form>
        <h2>Need an account? Register{" "}<Link to="/register">
                 here
                 </Link>.
        </h2>
    </div>
  );
}

export default SignInForm;