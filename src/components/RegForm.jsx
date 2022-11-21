import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import {db, auth} from './firebase';
import {doc, setDoc} from 'firebase/firestore'  



function RegForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password);
            navigate('/')
            setError('')
        } catch(error){
            setError(error.message)
        }
  }


//   const handleSubmit = async (e) => {
//     e.preventDefault(e);
//     const auth = getAuth();
//     await createUserWithEmailAndPassword(auth, email, password)
//         .then(async (userCredential) => {
//             console.log(userCredential)
//             const user = userCredential.user;
//             const ref = doc(db, 'courses', userCredential.user.uid);
//             const docRef = await setDoc(ref, {name})
//             .then((re) => {
//                 alert("data added successfully")
//             })
//         })
//         .catch((error) => {
//             alert("something went wrong retry")
//         });


//     }

  return (
    <main>
        <h2>Register</h2>
        {error ? <p>{error}</p> : null}
        <Form onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    controlId="email"
                    type="email"
                     placeholder="Email"
                     onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    controlId="password"
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>      
           </fieldset> 
           <Button type="submit">   
                Register
            </Button>   
        </Form>
        <h4>Already a member? Sign-in{" "} 
        <Link to="/login">
                 here
                 </Link>.
        </h4>
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
