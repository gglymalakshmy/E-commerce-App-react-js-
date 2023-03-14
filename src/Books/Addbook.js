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
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {SelectChangeEvent} from '@mui/material'
const theme = createTheme();


export default function Addbook() {

  const handleChange = (event: SelectChangeEvent) => {
    setAvailability(event.target.value);
  };
  const [authorname,setAuthorname]=useState("")
  const [bookname,setBookname]=useState("")
  const [price,setPrice]=useState("")
  const [availability,setAvailability]=useState(true)
  const navigate=useNavigate()
  const Submit=(e)=>{
    e.preventDefault();
    if (!price||!authorname||!bookname||!availability)
    {
      alert("Enter the fields......")
    }
    else{
      axios.post("http://localhost:5000/booklist",{bookname,authorname,price,availability}).then((res)=>{
     //console.log(res.data.isError);
     let error=res.data.isError
     if(error)
     {
      alert("error")
     }
     else{
     alert("Book added....")
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
            Book Entry
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="bookname"
                  required
                  fullWidth
                  id="bookname"
                  label="Book Name"
                  autoFocus
                  onChange={(e)=>{
                    setBookname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="authorname"
                  required
                  fullWidth
                  id="authorname"
                  label="Author Name"
                  autoFocus
                  onChange={(e)=>{
                    setAuthorname(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  onChange={(e)=>{
                    setPrice(e.target.value)
                  }}
                />                
              </Grid>
              <Grid item xs={12}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Availability</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={availability}
          // onChange={(e)=>{
          //   setAvailability(e.target.value)
          // }}
         
          onChange={handleChange}
          label="Availability"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>True</MenuItem>
          <MenuItem value={0}>False</MenuItem>
        </Select>
      </FormControl>
      </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Submit}
            >
              Add Book
            </Button>           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}