import "./navbar.css"
import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="logo">salma booking</span>
        <div className="navItems">
          <button className="navButton"> Register</button>
          <button className="navButton"> Log in</button>
        </div>
      </div>
    </div>
  )
}
