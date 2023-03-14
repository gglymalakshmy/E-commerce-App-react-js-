import * as React from 'react';
import { Button } from '@mui/material';
import { useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { Form } from 'react-bootstrap';

export default function Updatebook() {
  const [fetchbooks,setFetchbooks]=useState([])
  const [bookname,setBookname]=useState(fetchbooks.bookname)
  const [authorname,setAuthorname]=useState(fetchbooks.authorname)
  const [price,setPrice]=useState(fetchbooks.price)
  const [availability,setAvailability]=useState(fetchbooks.availability)
  const [_id,setId]=useState();
  const navigate=useNavigate();


  const {index}=useParams()
  console.log(index);
  useEffect(() => {
    axios.get("http://localhost:5000/getallbooks").then((res)=>{
    setFetchbooks(res.data[index]);
    setId(fetchbooks._id)
   // setId(fetchbooks._id)
    // console.log(res.data);
  console.log(fetchbooks);
  })
})
  const updateBook=()=>{
      axios.put("http://localhost:5000/update",{_id,bookname,authorname,price,availability}).then((res)=>{
        alert("Updated")
     })
     navigate(-1)
     }
     //console.log(fetchbooks)
  return (
    <div><h2>
        Updatebook
    </h2>
    {/* {fetchbooks.map((row) => ( */}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="bookname" placeholder="Enter Bookname"   defaultValue={fetchbooks.bookname} onChange={(e)=>setBookname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="authorname" placeholder="Enter Authorname"   defaultValue={fetchbooks.authorname} onChange={(e)=>setAuthorname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="price" placeholder="Enter Price"   defaultValue={fetchbooks.price} onChange={(e)=>setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="availability" placeholder="Enter Availability"   defaultValue={fetchbooks.availability} onChange={(e)=>setAvailability(e.target.value)} />
        </Form.Group>
    </Form>  
    <Button variant="primary" type="submit" onClick={()=>{updateBook()}}>
        Update
      </Button> 
    </div>
  );
}