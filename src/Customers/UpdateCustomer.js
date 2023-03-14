import * as React from 'react';
import { Button } from '@mui/material';
import { useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { Form } from 'react-bootstrap';

export default function Updatebook() {
  const [fetchcustomer,setFetchcustomer]=useState([])
  const [customername,setCustomername]=useState(fetchcustomer.customername)
  const [email,setEmail]=useState(fetchcustomer.email)
  const [address,setAddress]=useState(fetchcustomer.address)
  const [city,setCity]=useState(fetchcustomer.city)
  const [state,setState]=useState(fetchcustomer.state)
  const [country,setCountry]=useState(fetchcustomer.country)
  const [pincode,setPincode]=useState(fetchcustomer.pincode)
  const [_id,setId]=useState();
  const navigate=useNavigate();


  const {index}=useParams()
  console.log(index);
  useEffect(() => {
    axios.get("http://localhost:5000/getallcustomers").then((res)=>{
    setFetchcustomer(res.data[index]);
    setId(fetchcustomer._id)
   // setId(fetchbooks._id)
    // console.log(res.data);
  console.log(fetchcustomer);
  })
})
  const updateBook=()=>{
      axios.put("http://localhost:5000/updatecustomer",{_id,customername,email,address,city,state,country,pincode}).then((res)=>{
        alert("Updated")
     })
     navigate(-1)
     }
     //console.log(fetchbooks)
  return (
    <div><h2>
        UpdateCustomer
    </h2>
    {/* {fetchbooks.map((row) => ( */}
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="customername" placeholder="Enter Customername"   defaultValue={fetchcustomer.customername} onChange={(e)=>setCustomername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"   defaultValue={fetchcustomer.email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Enter Address"   defaultValue={fetchcustomer.address} onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="Enter City"   defaultValue={fetchcustomer.city} onChange={(e)=>setCity(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="state" placeholder="Enter State"   defaultValue={fetchcustomer.state} onChange={(e)=>setState(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control type="country" placeholder="Enter Country"   defaultValue={fetchcustomer.country} onChange={(e)=>setCountry(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="pincode" placeholder="Enter Pincode"   defaultValue={fetchcustomer.pincode} onChange={(e)=>setPincode(e.target.value)} />
        </Form.Group>
    </Form>  
    <Button variant="primary" type="submit" onClick={()=>{updateBook()}}>
        Update
      </Button> 
    </div>
  );
}