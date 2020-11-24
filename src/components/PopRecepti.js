import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PopRecepti({name, steps, link}) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
      >
        <Button variant="secondary" onClick={handleShow}>
          Whole Recipe
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {steps}
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center">
            <a className="link" href={link} target="_blank" rel="noopener noreferrer">Link on - {name}</a>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopRecepti;