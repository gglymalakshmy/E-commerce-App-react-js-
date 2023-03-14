import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';
export default function Purchasebook() {
const [books,setBooks]=useState([])
//let [quantity,setQuantity]=useState(0)


// function addToCart(item) {
//   const itemExist = books.find((i) => i.id === item.id);
//   if (itemExist) {
//   const updatedCart = books.map((i) =>
//   i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//   );
//   setBooks(updatedCart);
//   } else {
//     setBooks([...books, { ...item, quantity: 1 }]);
//   }
//   }
  



useEffect(() => {
  axios.get("http://localhost:5000/getallbooks").then((res)=>{
  setBooks(res.data);
  // console.log(res.data);

})
  },[])
  
  return (
    
      <div className='row'>
    <div className='col-md-4'> 
      <h3>Shopping Corner</h3>
      {books.map((row) => (
    <Card sx={{ maxWidth: 345 }}>
       
      {/* <CardMedia
        component="img"
        alt="download"
        height="140"
        image="../Images/download.jpg"
      /> */}
      
      <CardContent>
{/*     
        <Typography gutterBottom variant="h6" component="div"> */}
        <Typography variant="body1" color="text.secondary">
        Book Name : {row.bookname}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
         Price : {row.price}.Rs
        </Typography>
        
      </CardContent>
     
      <CardActions>
      {/* <Button size="small" onClick={addToCart}>Add To Cart</Button> */}
        <Button size="small" style={{textDecoration:"none",color:"blue"}} >Add To Cart</Button>
        <Link style={{textDecoration:"none",color:"blue"}} to="/placeorder">
                  <ListItemButton size="small">
                    <ListItemText primary="PLACE ORDER" />
                  </ListItemButton>
                </Link>
      </CardActions>
      
    </Card>
        ))} 
    </div>
    </div>
  )
}