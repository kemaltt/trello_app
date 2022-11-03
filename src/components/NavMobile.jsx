import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'

export default function NavMobile({ setIsLogin, isLogin, setLoading }) {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleLogOut = () => {
    // localStorage.clear()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setLoading(true)
    setToggle(!toggle)
    navigate('/login')
    setIsLogin(false)
  }
  return (
    <>
      <div className="nav_mobile">
        <div className="logo">
          <img src="trello.png" alt="logo" />
          <h2>Trello</h2>
        </div>

        {!toggle ? (
          <AiOutlineMenu onClick={handleToggle} className="nav_menü" />
        ) : (
          //   <ImCross onClick={handleToggle} className="nav_menü" />
          <i onClick={handleToggle} class="las la-times nav_menü"></i>
        )}
      </div>
      {toggle ? (
        <div className="nav_toggle_item">
          <ul>
            <Link>Features</Link>
            <Link>Solutions</Link>
            <Link>Plans</Link>
            <Link>Pricing</Link>
            <Link>Resources</Link>
          </ul>
          <div className="nav_items_auth">
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
          </div>
        </div>
      ) : null}
    </>
  )
}
