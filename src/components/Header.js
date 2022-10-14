import React, { Component} from 'react'
import Sidebar from './Sidebar'
import SignIn from './SignIn'

function Header() {
  return (
    <div>
      <header>
      <nav>
        <Sidebar/>
          Studium
          <input type="search" value="Search" />
        <SignIn/>
      </nav>
      </header>
    </div>
  );
}

export default Header;
