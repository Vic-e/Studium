import React from 'react'
import {Nav, Button} from 'react-bootstrap'
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
          <Nav className="navDesign">
              {user?
              <>
               <Nav.Item>
                <Nav.Link> 
                <Link to="member"><h5>Account</h5></Link>
                </Nav.Link>
               </Nav.Item> 
               <Nav.Item>
                <Nav.Link>
                 <Link onClick={handleLogout}><h5>Logout</h5></Link>  
                </Nav.Link>
               </Nav.Item>
              </>
              : 
              <>
                <Nav.Item>
                <Nav.Link> 
                 <Link to="login"><Button className="border-0">Sign-In</Button></Link>
                </Nav.Link>
                </Nav.Item> 
               <Nav.Item>
               <Nav.Link>
                 <Link to="register"><Button>Register</Button></Link>
                 </Nav.Link>
               </Nav.Item>
              </>
              }         
          </Nav>
    </div>
  );
}

export default SignIn;
