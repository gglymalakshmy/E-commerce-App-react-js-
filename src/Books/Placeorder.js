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
import {  TextareaAutosize } from '@mui/material';
const theme = createTheme();


export default function Placeorder() {
  const [customername,setCustomername]=useState("")
  const [address,setAddress]=useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [country,setCountry]=useState("")
  const [pincode,setPincode]=useState("")
  const [mobile,setMobile]=useState("")

  const navigate=useNavigate()
  const Submit=(e)=>{
    e.preventDefault();
    if (!customername||!mobile||!address||!city||!state||!country||!pincode)
    {
      alert("Enter the fields......")
    }
    else{
      axios.post("http://localhost:5000/placeorder",{customername,mobile,address,city,state,country,pincode}).then((res)=>{
     //console.log(res.data.isError);
     let error=res.data.isError
     if(error)
     {
      alert("error")
     }
     else{
     alert("Address Saved For Product Delivey")
     }
     
 })
 
}
navigate(-1)
  }
  return (
    // <div className='row'>
    // <div className='col-md-3'> 
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
            Delivery Address
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="customername"
                  required
                  fullWidth
                  id="customer"
                  label="Customer Name"
                  autoFocus
                  onChange={(e)=>{
                    setCustomername(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={20}>

            <TextareaAutosize
             aria-label="Address"
            minRows={5}
            placeholder="Address"
            label="Address"
            style={{ width: 400 }}
            onChange={(e)=>{
              setAddress(e.target.value)}}
          />
          </Grid>
          <Grid item xs={12}>
                <TextField
                  autoComplete="country"
                  name="country"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                  onChange={(e)=>{
                    setCountry(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="state"
                  name="state"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  autoFocus
                  onChange={(e)=>{
                    setState(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="city"
                  name="city"
                  autoComplete="city"
                  onChange={(e)=>{
                    setCity(e.target.value)
                  }}
                />                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="pincode"
                  name="pincode"
                  required
                  fullWidth
                  id="pincode"
                  label="pincode"
                  autoFocus
                  onChange={(e)=>{
                    setPincode(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="mobile"
                  name="mobile"
                  required
                  fullWidth
                  id="mobile"
                  label="mobile"
                  autoFocus
                  onChange={(e)=>{
                    setMobile(e.target.value)
                  }}
                />
              </Grid>
            
            </Grid>
            <Grid>
            <Button
              type="submit"
            //   fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Submit}
            >
              Save
            </Button>  
            <Button
             type="submit"
            //   fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
            >
             Cancel
            </Button>    
            </Grid>       
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
  
}