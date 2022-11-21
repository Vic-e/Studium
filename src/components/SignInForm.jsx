import React, { useState }  from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, logIn} = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('')


  const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await logIn(email, password);
            navigate('/')
            setError('')
        } catch(error){
            setError(error.message)
        }
  }
    
  return (
    <main>
        <h2>Sign-In</h2>
        {error ? <p>Your email or password are inccorect.</p> : null}
        <Form onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    controlId="email"
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    controlId="password"
                     type="password"
                     placeholder="Password" 
                     onChange={(e) => setPassword(e.target.value)}
                     />
                </Form.Group>
                <Button type="submit">   
                Sign-In
                </Button>      
           </fieldset>   
        </Form>
        <h4>Need an account? Register{" "}<Link to="/register">
                 here
                 </Link>.
        </h4>
    </main>
  );
}

export default SignInForm;