import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
// import css from '../css/Home.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
export default function Home({ isLogin, setIsLogin, loading, setLoading }) {
  const navigate = useNavigate()
  return (
    <>
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setLoading={setLoading}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="main">
                <section>
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
              alt=""
            />
          </section>
          <section>
            <h3>Bring all your tasks,</h3>
            <h3>teammates, and tools</h3>
            <h3> together</h3>
            <p>
              Trello keeps everything in the same place-even if your team isn’t.
            </p>
            <div>
              <Box component="form" noValidate className="main_input">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

                <Button
                  onClick={() => navigate('/register')}
                  fullWidth
                  variant="contained"
                  className="btn"
                >
                  Sign up - it' is free
                </Button>
              </Box>
            </div>
          </section>
    
        </div>
      )}
    </>
  )
}
