import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
export default function NavPages() {
  const navigate = useNavigate()

  return (
    <div className="nav_pages">
      <div onClick={() => navigate('/')} className="logo">
        {/* <img src="trello.png" alt="logo" /> */}
        <h4>T4US</h4>
        <h2>TODO</h2>
      </div>

      <Button onClick={() => navigate('/')} variant="contained" color="warning">
        Back
      </Button>
    </div>
  )
}
