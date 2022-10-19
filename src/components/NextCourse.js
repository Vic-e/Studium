import React, { Component} from 'react'
import {Row, Col, Stack} from 'react-bootstrap';

function NextCourse() {
  return (
          <Stack className="vBody" gap={4}>
              <div>
                <h4>Name of NextCourse</h4>
              <ul>
              <li>Now Watching</li>
              <li>Length</li>
              </ul>
              </div>
          </Stack>
  );
}

export default NextCourse;
