import React, { Component} from 'react'

function Video() {
  return (
    <div>
    <h2>Course Name</h2>
    <video width="800" height="500" controls>
        <source src="" type="video/mp4"/>
    </video>
    <h3>Name of Video</h3>
    <ul>
        <li>side nav</li>
        <li>side nav</li>
        <li>side nav</li>
    </ul>
    <div>
        <p>Course Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
        <li>Instructor(s): Lorem ipsum</li>
        <li>Category: Lorem ipsum</li>
        <li>Transcript: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
         </ul>
    </div>
    </div>
  );
}

export default Video;
