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
import Modal1 from './Modal1';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
function Getallbooks() {

  const [show, setShow] = useState(false);
  const [search,setSearch]=useState('');
  const [fetchbooks,setFetchbooks]=useState([])
  //const [book,setBook]=useState('')
  // const [bookname,setBookname]=useState('')
  // const [authorname,setAuthorname]=useState('')
  // const [price,setPrice]=useState('')
  // const [availability,setAvailability]=useState('')
  const [_id,setId]=useState('')
  const [deleteid,setdeleteId]=useState('')
  console.log(deleteid);
  useEffect(() => {
    axios.get("http://localhost:5000/getallbooks").then((res)=>{
    setFetchbooks(res.data);
    // console.log(res.data);
  
  })
    },[deleteid])


    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true);
      //console.log(id);
      setdeleteId(id);

    }
const searching=fetchbooks.filter((fetchbooks)=>fetchbooks.bookname.includes(search))
console.log(searching);
   
  return (
    <Stack spacing={2}>
    <Pagination count={5} />
    <div class="input-group rounded">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  onChange={(e)=>setSearch(e.target.value)} />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
<TableContainer component={Paper}>

    <h2>Available Book List</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">BookName</StyledTableCell>
            <StyledTableCell align="left">Author Name</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Availability</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searching.map((row,index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.bookname}</TableCell>
              <TableCell align="left">{row.authorname}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.availability?"true":"false"}</TableCell>
               <TableCell align="left" >
            {<DeleteIcon onClick={()=>handleShow(row._id)}/>}
      </TableCell>
      <Link to={`/edit/${index}`}>
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
             <Modal1 id1={deleteid} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        </TableBody>
      </Table>
    </TableContainer>

</div>
</Stack>

  )
}

export default Getallbooks
