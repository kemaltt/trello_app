import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

export default function NavDesktop({ setIsLogin, isLogin, setLoading }) {
  const navigate = useNavigate()
  const handleLogOut = () => {
    // localStorage.clear()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setLoading(true)
    setIsLogin(false)
    navigate('/login')
  }
  return (
    <div className="nav_desktop">

        <div className="logo">
          <img src="trello.png" alt="logo" />
          <h2>Trello</h2>
        </div>
        <ul>
          <Link>About</Link>
          <Link>Contact</Link>
         
        </ul>
 
      {/* <div className="nav_items_auth">
        {isLogin ? (
          <Link onClick={handleLogOut}>
            Log out <MdLogout style={{ fontSize: '1.5rem' }} />{' '}
          </Link>
        ) : (
          <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Get Trello for free</Link>
          </>
        )}
      </div> */}
    </div>
  )
}
