import React from 'react'
import { Row, Col, Stack, Accordion} from 'react-bootstrap';

const NextVideo = () => {
  return (
    <>
        <Row>
            <Col>
              <video width="800" height="500" controls>
                <source src="" type="video/mp4"/>
              </video>
                  <h3 style={{textAlign:"left"}}>Video Title</h3>
          </Col>
          <Col>
          <Stack className="vBody" gap={4}>
                  <div>
                    <h4>Name of NextVideo</h4>
                  <ul>
                  <li>Now Watching</li>
                  <li>Length</li>
                  </ul>
                  </div>
              </Stack>
              <Stack className="vBody" gap={4}>
                  <div>
                    <h4>Name of NextVideo</h4>
                  <ul>
                  <li>Now Watching</li>
                  <li>Length</li>
                  </ul>
                  </div>
              </Stack>
              <Stack className="vBody" gap={4}>
                  <div>
                    <h4>Name of NextVideo</h4>
                  <ul>
                  <li>Now Watching</li>
                  <li>Length</li>
                  </ul>
                  </div>
              </Stack>
          </Col>
        </Row>
        <Stack className="vBody">
        <h4>Video Description:</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h4>Instructor(s): </h4>
          Lorem ipsum
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
          <Accordion.Header><h4>Transcript:</h4></Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </Stack> 
     </>     
  );
}

export default NextVideo;
