import React, {useState} from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function SignIn() {
  return (
    <div>
          <Nav>
            
               <Nav.Item>
               <Nav.Link>
                <Link to="login">
                 Sign-in
                 </Link>
               </Nav.Link>
               </Nav.Item> 
           
           
              <Nav.Item>
              <Nav.Link>
                <Link to="register">
                    Register
                </Link>  
                </Nav.Link>
              </Nav.Item>            
          </Nav>
    </div>
  );
}

export default SignIn;
