import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from 'react';
import axios from 'axios';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material';
const theme = createTheme();


export default function Addclient() {

  const [clientname,setClientname]=useState("")
  const [role,setRole]=useState("")
  const [email,setEmail]=useState("")
  const [sign,setSign]=useState()
  const [contact,setContact]=useState("")
  const navigate=useNavigate()
  // const handleRadio=(e)=>{
  //     const {value,checked}=e.target
  //     if(value ==='sign' && checked){
  //       setSign(true)
  //     }
  //     // else if(value ==='notsign' && checked)
  //     else
  //     {
  //       setSign(false)
  //     }
  //     console.log(sign);
  //     console.log(value);
  // }
  const Submit=(e)=>{
    e.preventDefault();
    if (!clientname||!role||!email||!sign||!contact)
    {
      alert("Enter the fields......")
    }
    else{
      axios.post("http://localhost:5000/clientlist",{clientname,role,email,sign,contact}).then((res)=>{
     //console.log(res.data.isError);
     let error=res.data.isError
     if(error)
     {
      alert("error")
     }
     else{
     alert("Client added....")
     }
     
 })
 
}
navigate(-1)
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
          <Typography component="h1" variant="h5">
            Add Client
          </Typography>      
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="clientname"
                  required
                  fullWidth
                  id="clientname"
                  label="Client Name"
                  autoFocus
                  onChange={(e)=>{
                    setClientname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="role"
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  autoFocus
                  onChange={(e)=>{
                    setRole(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />                
              </Grid>
              <Grid item xs={12}>
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="signin" id="inlineRadio1" value="sign" onChange={(e)=>
  
                  //  handleRadio(e)
                  e.target.value
                 }/>
  <label class="form-check-label" for="inlineRadio1">Sign In</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="notsignin" id="inlineRadio2" value="notsign" onChange={(e)=>
  
  // handleRadio(e)
  e.target.value
}/>
  <label class="form-check-label" for="inlineRadio2">Not Sign In</label>
  {/* {console.log(sign)} */}
</div>

            </Grid>        
            <Grid item xs={20}>

            <TextareaAutosize
             aria-label="Contact Info"
            minRows={5}
            placeholder="Contact Info"
            style={{ width: 400 }}
            onChange={(e)=>{
              setContact(e.target.value)}}
          />
          </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Submit}
            >
              Add Client
            </Button>           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}