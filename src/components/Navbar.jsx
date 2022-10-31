import React from 'react'
import { Link } from 'react-router-dom'
// import style from '../css/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_items1">
        <div className="logo">
          <img src="trello.png" alt="logo" />
          <h2>Trello</h2>
        </div>
        <ul>
          <Link>Features</Link>
          <Link>Solutions</Link>
          <Link>Plans</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
        </ul>
      </div>
      <div className="nav_items_auth">
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Get Trello for free</Link>
      </div>
    </div>
  )
}
