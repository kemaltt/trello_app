import React, { useEffect } from 'react'
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
import { Link } from 'react-router-dom'
import NavPages from '../components/NavPages'

const theme = createTheme()
export default function Register({ setUserData, userData }) {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    const userInfo = userData.filter((el) => {
      return el.email === email
    })
    const userEmail = userInfo[0].email
    if (userEmail === email) {
      alert('there is an account with this email, please log in')
    } else {
      if (password === '' || email === '') {
        alert('please fill in the blanks')
      } else {
        setUserData([
          ...userData,
          {
            name: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            isLogin: true,
          },
        ])

        setTimeout(() => {
          navigate('/login')
        }, 300)
      }
    }
  }

  console.log(userData)

  useEffect(() => {}, [])

  return (
    <div className="register">
      <NavPages />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {/* <Box
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
        </Box> */}
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar> */}

            <Typography sx={{ color: 'white' }} component="h1" variant="h5">
              Create new Account
            </Typography>

            <Grid item sx={{ m: 3 }}>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/"
                variant="body2"
              >
                Already Registered? Login
              </Link>
            </Grid>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="USERNAME"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="PASSWORD"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="CONFIRM PASSWORD"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                SEND
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}
