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
const isEmail = (email) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

const isPassword = (password) =>
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i.test(password)

export default function Register({ setUserData, userData }) {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const userName=data.get("username")
    const email = data.get('email')
    const password = data.get('password')
    const passwordConfirm = data.get('passwordconfirm')

  

//     const userInfo = userData.filter((el) => {
//       return el.email === email
//     })
// const userEmail=userInfo[0].email
    // if (userEmail === email) {
    //   alert('there is an account with this email, please log in')
    // } else {
      if (password === '' || passwordConfirm === '' || email === '') {
        alert('please fill in the blanks')
      }  else if(!isEmail(email)){
        console.log(" Please enter a valid email address");
              } 
              
              else if(!isPassword(password)){
        console.log(" Please enter a valid password");
      }
      
      else if(password !== passwordConfirm){
console.log("password not match");
      }  else  {
        setUserData([
   
          {
            userName:userName,
            email: email,
            password: password,
            passwordConfirm:passwordConfirm,
            isLogin: true,
          },
        ])

        setTimeout(() => {
          navigate('/')
        }, 300)
      }
    // }
  }

  console.log(userData)

  useEffect(() => {}, [])

  return (
    <div className="register">
      <NavPages />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

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
                    name="username"
                    required
                    fullWidth
                    id="username"
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
                    name="passwordconfirm"
                    label="CONFIRM PASSWORD"
                    type="password"
                    id="passwordconfirm"
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
