import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import axios from 'axios';
import { Alert} from '@mui/material';

const theme = createTheme();
export default function Login() {
  // useEffect(() => {
  //   const user=localStorage.getItem("user")
  //   if(user)
  //   navigate('/home')
  // })
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [alert,setAlert]=useState("");
  const [alertsuccess, setalertSuccess] = useState(false)
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!email||!password)
    {
      setalertSuccess(true);
      setAlert("Enter the fields......");
    }
    else{
    axios.post("http://localhost:5000/login",{email,password}).then((res)=>{
     console.log(res.data);
     setalertSuccess(true);
     setAlert(res.data.message);
  //  setAlert(true);
     let error=res.data.isError
     if(error)
     {
      setalertSuccess(true)
      setAlert("error")
     }
     else{
      localStorage.setItem("user",JSON.stringify(res.data))
     navigate("/home")
     }
     
 })
 console.log(alert);
 
}
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {
            alertsuccess ? <Alert severity="success">{alert}</Alert>:""
          }
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
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
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick ={handleSubmit}
               >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link to={'/'}>Don't have an account? Sign Up"</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}