import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'


const Pagina = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (



    <div>



      

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>


      <Navbar bg="dark">
        
          <Navbar.Brand href="#home">
           
        <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>
          </Navbar.Brand>
        
      </Navbar>
      <Container>

        {props.children}
      </Container>
    </div>
  )
}

export default Pagina