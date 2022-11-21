import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate();
  
  const handleLogout =  async() =>{
    try{
      await logOut();
      navigate('/');
    } catch(error){
      alert("there was a error logging out")
    }  
  };

  return (
    <div>
          <Nav>
              {user?
              <>
               <Nav.Item>
                <Nav.Link> 
                <Link to="member">Account</Link>
                </Nav.Link>
               </Nav.Item> 
               <Nav.Item>
                <Nav.Link>
                 <Link onClick={handleLogout}>Logout</Link>  
                </Nav.Link>
               </Nav.Item>
              </>
              : 
              <>
                <Nav.Item>
                <Nav.Link> 
                 <Link to="login">Sign-in</Link>
                </Nav.Link>
                </Nav.Item> 
               <Nav.Item>
               <Nav.Link>
                 <Link to="register">Register</Link>
                 </Nav.Link>
               </Nav.Item>
              </>
              }         
          </Nav>
    </div>
  );
}

export default SignIn;
