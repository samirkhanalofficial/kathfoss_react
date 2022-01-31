import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default  function DeleteModel(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      
        <Button class='btn btn-danger {props.class}' variant="danger" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete <b>{props.email}</b></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={function (){ handleClose();props.onClick(); }}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  
}
