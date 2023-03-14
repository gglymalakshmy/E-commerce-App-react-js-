import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import  { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/system';
import Modalcust from './Modalcust';
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export default function Getallcustomers() {

  const [show, setShow] = useState(false);
  const [search,setSearch]=useState('');
  const [fetchcustomers,setFetchcustomers]=useState([])
  const [_id,setId]=useState('')
  const [deleteid,setdeleteId]=useState('')
  console.log(deleteid);
  useEffect(() => {
    axios.get("http://localhost:5000/getallcustomers").then((res)=>{
        setFetchcustomers(res.data);
    // console.log(res.data);
  
  })
    },[deleteid])


    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true);
      //console.log(id);
      setdeleteId(id);

    }
// const searching=fetchcustomers.filter((fetchcustomers)=>fetchcustomers.name.includes(search))
// console.log(searching);
   
  return (

    <div class="input-group rounded">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  onChange={(e)=>setSearch(e.target.value)} />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
<TableContainer component={Paper}>

    <h2>Available Customers List</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">CustomerName</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="left">State</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">Pincode</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchcustomers.map((row,index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.customername}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.state}</TableCell>
              <TableCell align="left">{row.country}</TableCell>
              <TableCell align="left">{row.pincode}</TableCell>
               <TableCell align="left" >
            <DeleteIcon onClick={()=>handleShow(row._id)}/>
      </TableCell>
      <Link to={`/editcustomer/${index}`}>
      <TableCell align="left">
      <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={8}>
        <EditIcon />
      </Grid>
      </Grid>
      </TableCell>
      </Link>
            </TableRow>
          ))}
          <Modalcust id1={deleteid} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
        </TableBody>
      </Table>
    </TableContainer>
</div>
  )
}

