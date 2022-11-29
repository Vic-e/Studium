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
    <main className="mt-5" style={{width:"400px"}}>
        <h3>Sign-In</h3>
        {error ? <p>Your email or password are inccorect.</p> : null}
        <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    controlId="email"
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-3">Password</Form.Label>
                    <Form.Control
                    controlId="password"
                     type="password"
                     onChange={(e) => setPassword(e.target.value)}
                     />
                </Form.Group>
                <Button variant="dark" style={{width:"100%", color:"#A68863"}} className="mt-4" type="submit">   
                Sign-In
                </Button>      
           </fieldset>   
        </Form>
        <h6>Need an account? {" "}<Link style={{ fontWeight:"bold", color:"#A68863"}} to="/register">Register
                 here
                 </Link>.
        </h6>
    </main>
  );
}

export default SignInForm;