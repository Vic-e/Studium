import React, { Component} from 'react'
import {Nav} from 'react-bootstrap';

function SignIn() {
  return (
    <div>
          <Nav>
              <Nav.Item>
                <Nav.Link>Sign-in</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Register</Nav.Link>
              </Nav.Item>
          </Nav>
    </div>
  );
}

export default SignIn;
