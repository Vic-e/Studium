import React from 'react'
import Sidebar from './Sidebar'
import SignIn from './SignIn'
import {Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Search from './Search'

const Header = () => {
  return (
    <div>
    <header>
      <Container>
        <Row className="p-0 mr-0">
          <Col xs lg="1" className="p-0 mr-0">
              <Sidebar/>
            </Col>
            <Col>
              <Link to="/">
                <h2>Studium Digital</h2>
              </Link>
              </Col>
            {/* <Col xs lg="4">
              <Search />
            </Col> */}
            <Col md="auto">
              <SignIn/>
            </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default Header;
