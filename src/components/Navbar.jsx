import React from 'react'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
// import style from '../css/Navbar.css'

export default function Navbar({ isLogin, setIsLogin }) {
  return (
    <div className="navbar">
      <NavDesktop setIsLogin={setIsLogin} isLogin={isLogin} />
      <NavMobile setIsLogin={setIsLogin} isLogin={isLogin} />
    </div>
  )
}
