import React, { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

export default function Login({ setIsLogin, setLoading }) {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData)
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    if (email === '' || password === '') {
      setMessage(
        <Box sx={{ mt: 3, color: 'red' }}>Please fill in the blanks!</Box>,
      )
    } else {
      if (userData.length > 0) {
        const [userInfo] = userData

        if (password === '' || email === '') {
          setMessage(
            <Box sx={{ mt: 3, color: 'red' }}>Please fill in the blanks!</Box>,
          )
        } else if (userInfo.email === email && userInfo.password === password) {
          // setIsLogin(true)
          setMessage(
            <Box sx={{ mt: 3, color: 'green' }}>Entry successful!</Box>,
          )
          setTimeout(() => {
            navigate('/about')
          }, 400)
        } else {
          setMessage(
            <Box sx={{ mt: 3, color: 'red' }}>Email or Eassword false!</Box>,
          )
        }
      } else {
        setMessage(
          <Box sx={{ mt: 3, color: 'red' }}>
            User not found please register!
          </Box>,
        )
      }
    }
  }

  return (
    <div className="login">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              padding: '1rem',
              color: 'white',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar> */}

            <Typography sx={{ marginBottom: 3 }} component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="warning"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
              />
              <Grid item xs={12} sx={{ mt: 1, mb: 1, textAlign: 'center' }}>
                {message}
              </Grid>
              <Typography sx={{ textAlign: 'center', pt: 2 }} component="h1">
                Forgot password?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
              >
                Login
              </Button>
              <Typography
                sx={{
                  textAlign: 'center',
                  borderTop: '1px solid white',
                  pt: 2,
                }}
                component="h1"
              >
                New Account
              </Typography>

              <Button
                onClick={() => navigate('/register')}
                variant="contained"
                color="secondary"
                sx={{ mt: 2, mb: 2, pl: 5, pr: 5 }}
              >
                Sing Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}
