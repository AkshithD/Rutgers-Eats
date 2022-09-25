import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalcomp(props) {
  const [show, setShow] = useState(false);
  //const [categories,setCategories]= useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let getcategories=()=>{
  //     let allcat=[]
  //     let category=props.categories
  //     for(let i =0; i<category.length;i++){
  //       allcat[i].push(category[i].title)
  //     }
  //     setCategories(
  //       categories=allcat
  //     )
  // }
  return (

    <>
    <Button variant="primary" onClick={handleShow} className="btn btn-danger">
        Get Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
          <img src={props.image.toString()} alt='restaurant' className='img-fluid' width="300" height="200" 
          style={{display:'block',marginLeft:'auto',marginRight:'auto'}}/>
            <br></br>
            Rating: {props.rating}
            <br></br>
            Phone Number: {props.phone}
            <br></br>
            <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">Website Link</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalcomp;