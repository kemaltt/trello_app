import React from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

export default function NavDesktop({ setIsLogin, isLogin }) {
  const handleLogOut = () => {
    // localStorage.clear()
    setIsLogin(false)
  }
  return (
    <div className="nav_desktop">
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
        {isLogin ? (
          <Link onClick={handleLogOut}>
            Log out{' '}
            <MdLogout style={{ marginBottom: '-6px', fontSize: '1.5rem' }} />{' '}
          </Link>
        ) : (
          <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Get Trello for free</Link>
          </>
        )}
      </div>
    </div>
  )
}
