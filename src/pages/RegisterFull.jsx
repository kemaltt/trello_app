import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a href="https://github.com/kemaltt" target="_blank " rel="noreferrer">
        Kemal
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()
export default function RegisterFull({ setUserData, userData }) {
  const navigate = useNavigate()
  const email = userData.email
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const password = data.get('password')
    const firstName = data.get('firstName')
    const lastName = data.get('lastName')

    if (password === '' || firstName === '' || lastName === '') {
      alert('please fill in the blanks')
    } else {
      setUserData([
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          isLogin: true,
        },
      ])

      setTimeout(() => {
        navigate('/login')
      }, 300)
    }
  }

  console.log(userData)

  useEffect(() => {}, [])

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
            Register a new account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  disabled
                  //   label="Email Address"
                  value={email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  style={{ textDecoration: 'none' }}
                  to="/login"
                  variant="body2"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
