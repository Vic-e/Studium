import React from 'react'
import {Row, Col, Stack} from 'react-bootstrap';

function NextVideo() {
  return (
          <Stack className="vBody" gap={4}>
              <div>
                <h4>Name of NextVideo</h4>
              <ul>
              <li>Now Watching</li>
              <li>Length</li>
              </ul>
              </div>
          </Stack>
  );
}

export default NextVideo;
