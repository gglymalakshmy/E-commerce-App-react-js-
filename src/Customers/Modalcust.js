import React, { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function  Modalcust({show,setShow,handleClose,handleShow,id1}) {
  //const [id,setId]=useState('')
  useEffect(() => {
  
  }, [id1])
  
  const Deletion=()=>{
  //  console.log(id1);
  if(id1)
  {
     const del=axios.delete(`http://localhost:5000/deletecust/${id1}`).then((res)=>res.data)
     setShow(false);    
//console.log(del);
return del;

  }
//console.log(id1);

//console.log(show);
    }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Do you want to delete the book item permanently???</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={Deletion}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}