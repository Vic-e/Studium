import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function LoggedIn() {

  return (
    <div>
          <Nav>
               <Nav.Item>
               <Nav.Link>
                <Link to="login">
                 Username
                 </Link>
               </Nav.Link>
               </Nav.Item> 
            </Nav>
    </div>        
  );
}

export default LoggedIn;