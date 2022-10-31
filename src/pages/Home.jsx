import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
// import css from '../css/Home.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="main">
        <section>
          <h3>Bring all your tasks,</h3>
          <h3>teammates, and tools</h3>
          <h3> together</h3>
          <p>
            Trello keeps everything in the same place-even if your team isn’t.
          </p>
          <div className="input">
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                onClick={() => navigate('/register')}
                fullWidth
                variant="contained"
                sx={{ mt: 1, ml: 2, padding: '15px', width: '300px' }}
              >
                Sign up - it' is free
              </Button>
            </Box>
          </div>
        </section>
        <section>
          <img
            src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </section>
      </div>
    </>
  )
}
