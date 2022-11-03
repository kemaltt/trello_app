import React from 'react'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
// import style from '../css/Navbar.css'

export default function Navbar({ isLogin, setIsLogin, setLoading }) {
  return (
    <div className="navbar_">
      <NavDesktop
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        setLoading={setLoading}
      />
      <NavMobile
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        setLoading={setLoading}
      />
    </div>
  )
}
