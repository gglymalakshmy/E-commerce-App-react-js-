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
import { useState,useEffect} from 'react';
import axios from 'axios';
import { FormControl, InputLabel } from '@mui/material';
import Calendar from './Calendar';
// import DatePicker from "react-datepicker";
const theme = createTheme();


export default function Addsale() {

  const [salename,setSalename]=useState("")
  const [productname,setProductname]=useState("")
  const [orderdate, setorderDate] = useState(new Date())
  const [price,setPrice]=useState("")
  const [orderquantity,setOrderquantity]=useState("")
  const [fetchbooks,setFetchbooks]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/getallbooks").then((res)=>{
    setFetchbooks(res.data);
    // console.log(res.data);
  
  })
    },[])
//console.log(fetchbooks);
  const Submit=(e)=>{
    e.preventDefault();
    if (!productname||!price||!salename||!orderdate||!orderquantity)
    {
      alert("Enter the fields......")
    }
    else{
      axios.post("http://localhost:5000/addsalelist",{salename,orderdate,productname,price,orderquantity}).then((res)=>{
     //console.log(res.data.isError);
     let error=res.data.isError
     if(error)
     {
      alert("error")
     }
     else{
     alert("Sale added....")
     }
     
 })
 
}
navigate(-1)
  }
  //console.log(fetchbooks)
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
            Add Sale
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                 <TextField
                  autoComplete="given-name"
                  name="salename"
                  required
                  fullWidth
                  id="salename"
                  label="Sale Name"
                  autoFocus
                  onChange={(e)=>{
                    setSalename(e.target.value)
                  }}
                />
              </Grid>
                

                   {/* <Grid item xs={12}>
                   <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Product Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="productname"
          name="productname"
          value={productname}
          label="Product Name"
          onChange={(e)=>{
            setProductname(e.target.value)
          }}
        >
          {fetchbooks.map((row) => (
          <MenuItem value={productname}>   
            {row.bookname}
          </MenuItem>
        ))}
        </Select> 
      </FormControl>
    </Box>
    </Grid> */}


           <Grid item xs={12}>
           {/* <DatePicker selected={orderdate} onChange={(e) => setorderDate(e)} /> */}
                 <Calendar label="Order Date"  onChange={(e)=>{
                    setorderDate(e.target.value)
                  }}/>
                  {console.log(orderdate)}
              </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
        <InputLabel id="productname">Product Name</InputLabel>
        <select
          labelId="productname"
          value={productname}
          label="Product Name"
          onChange={(e)=>{
            setProductname(e.target.value)
          }}
        >
        {fetchbooks.map((row) => (
            <option>{row.bookname}</option>
       ))}
        </select>
    {console.log(productname)}
        </FormControl>
        </Grid>

        <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Order Price"
                  name="price"
                  autoComplete="price"
                  onChange={(e)=>{
                    setPrice(e.target.value)
                  }}
                />                
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="orderquantity"
                  label="Order Quantity"
                  name="orderquantity"
                  autoComplete="orderquantity"
                  onChange={(e)=>{
                    setOrderquantity(e.target.value)
                  }}
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
              Add Sale
            </Button>           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}