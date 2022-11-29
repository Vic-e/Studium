import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import {db, auth} from './firebase';
import {doc, setDoc} from 'firebase/firestore';  


const RegForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password, username)
            navigate('/')
            setError('')
        } catch(error){
            setError(error.message)
        }
  }


  return (
    <main className="mt-5" style={{width:"400px"}}>
        <h2>Register</h2>
        {error ? <p>{error}</p> : null}
        <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <fieldset>
            <Form.Group>
                    <Form.Label className="mt-3">Username</Form.Label>
                    <Form.Control 
                    controlId="username"
                    type="username"
                     onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-3">Email</Form.Label>
                    <Form.Control 
                    controlId="email"
                    type="email"
                     onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-3">Password</Form.Label>
                    <Form.Control 
                    controlId="password"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>      
           </fieldset> 
           <Button variant="dark" style={{width:"100%", color:"#A68863"}} className="mt-4" type="submit">   
                Register
                </Button>   
        </Form>
        <h6>Already a member? {" "} <Link to="/login">Sign-in
        
                 here
                 </Link>.
        </h6>
    </main>
  );
}

export default RegForm;


{/* <Form.Group>
<Form.Label>Username</Form.Label>
<Form.Control 
controlId="displayName"
type="name"
 placeholder="Username"
 onChange={(e) => setDisplayName(e.target.value)} />
</Form.Group> */}
