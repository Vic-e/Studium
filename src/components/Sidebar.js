import React, { Component} from 'react'
import Stack from 'react-bootstrap';

function Sidebar() {
    return (
      <div>
      <Stack gap={4}>
        <div>Business</div>
        <div>Gaming</div>
        <div>Film</div>
        <div>Web 3</div>
        </Stack>
      </div>
    );
}

export default Sidebar;
