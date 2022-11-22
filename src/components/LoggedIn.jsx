import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const LoggedIn = () => {

  return (
    <div>
          <Nav>
               <Nav.Item>
               <Nav.Link>
                <Link to="member">
                 Username
                 </Link>
               </Nav.Link>
               </Nav.Item> 
            </Nav>
    </div>        
  );
}

export default LoggedIn;