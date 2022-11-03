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
import { useNavigate, Link } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a href="https://github.com/kemaltt" target="_blank" rel="noreferrer">
        Kemal
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const theme = createTheme()

export default function Login({ setIsLogin }) {
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
          setIsLogin(true)
          setMessage(
            <Box sx={{ mt: 3, color: 'green' }}>Entry successful!</Box>,
          )
          setTimeout(() => {
            navigate('/')
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 4,
          }}
        >
          <img src="trello.png" alt="" />
          <Typography component="h1" variant="h4">
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            boxShadow: '1px 1px 5px 1px',
            padding: '1rem',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar> */}

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              {message}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/register"
                  variant="body2"
                >
                  {'Sign up for an account'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
