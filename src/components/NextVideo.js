import React, { useState, useEffect, useContext}  from 'react'
import { Row, Col, Stack, Accordion} from 'react-bootstrap';
import { Link} from 'react-router-dom'
import { doc, query, collection, where, getDocs, onSnapshot } from "firebase/firestore";

const NextVideo = () => {

  // const [videoThumbnail, setVideoThumbnail] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoTranscript, setVideoTranscript] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoFile, setVideoFile] = useState('');
  // const [videoLength, setVideoLength] = useState('');

  return (

    <>
        <Row className="mt-4">
            <Col>
              <video width="900" height="500" controls>
                <source src="https://secureservercdn.net/198.71.233.226/tp7.869.myftpupload.com/wp-content/uploads/2022/02/web-monetization-panel.mp4" type="video/mp4"/>
              </video>
                  <h3 style={{textAlign:"left", color: '#A68863', fontWeight:"bold"}}>Why Web Monetization is the Futures</h3>
          </Col>
          {/* <Col>
          <Stack className="vBody" gap={4}>
                  <div className="py-3 px-4" style={{background: '#0F0C0E'}}>
                    <h4 style={{fontWeight:'bold'}}>Name of Next Video</h4>
                  <ul>
                  <li>Length</li>
                  <li>Now Watching</li>            
                  </ul>
                  </div>
          </Stack> 
          </Col> */}
        </Row>
        <Stack className="vBody">
        <h4>Description:</h4>
          <p> Monique T. Marshall from Black to Business moderates a panel with creatives and experts in the web monetization space, Tseli Thabane, General Manager, Coil South Africa and Briana Ashley Stuart, Founder &amp; Creative Director of Stu Arts Dance. </p>
          <h4>Instructor(s): </h4>
          <p> Monique T. Marshall, Tseli Thabane, Briana Ashley Stuart</p>
          <Accordion className="mt-4" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
          <Accordion.Header><h4>Transcript</h4></Accordion.Header>
          <Accordion.Body style={{backgroundColor: '#0F0C0E', color: '#ffffff'}}>
            <p></p>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </Stack> 
     </>     
  );
}

export default NextVideo;
