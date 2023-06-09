import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import Modal1 from './Modal1';
//import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Getallclient() {

  const [show, setShow] = useState(false);

  const [fetchclients,setFetchclients]=useState([])
  const [deleteid,setdeleteId]=useState('')
  // console.log(deleteid);
  useEffect(() => {
    axios.get("http://localhost:5000/getallclients").then((res)=>{
    setFetchclients(res.data);
    // console.log(res.data);
  
  })
    },[deleteid])


    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true);
      //console.log(id);
      setdeleteId(id);

    }

   
  return (

<TableContainer component={Paper}>

    <h2>Available Client Lists</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

              <TableHead>
          <TableRow>
          <StyledTableCell align="left">Client Name</StyledTableCell>
            <StyledTableCell align="left">Role</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Sign In Status</StyledTableCell>
            <StyledTableCell align="left">Contact Info</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchclients.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.clientname}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.sign}</TableCell>
              <TableCell align="left">{row.contact}</TableCell>
               <TableCell align="left" >
                <DeleteIcon />
            {/* {<DeleteIcon onClick={()=>handleShow(row._id)}/>} */}
      </TableCell>
      <TableCell align="left">  <EditIcon /></TableCell>


      {/* <Link to={`/edit/${_id}`}>
      <TableCell align="left">
      <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={8}>
        <EditIcon />
      </Grid>
      </Grid>
      </TableCell>
      </Link> */}
            </TableRow>
          ))}
             {/* <Modal1 id1={deleteid} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> */}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


