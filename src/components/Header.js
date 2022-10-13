import React, { Component} from 'react'

function Header() {
  return (
    <div>
      <header className="">
      <nav className="flex-container">
          Studium
          <input type="search" value="search" />
          <ul>
              <li>Sign-in</li>
              <li>Register</li>
          </ul>
      </nav>
      </header>
    </div>
  );
}

export default Header;
