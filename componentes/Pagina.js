import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import {BsBorderWidth,BsFillCartCheckFill,BsFillBoxSeamFill} from 'react-icons/bs'
import {AiOutlineDropbox,AiFillHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdProductionQuantityLimits} from 'react-icons/md'


const Pagina = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSelect = (eventKey) => alert(`tem certeza que quer ir para ${eventKey}`);


  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
        
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav defaultActiveKey="/" className="flex-column">


      <Nav.Link href="/index"><Button variant="danger" size="lg">Início<AiFillHome></AiFillHome></Button></Nav.Link>
      <Nav.Link href="/clientes"><Button variant="danger" size="lg">Clientes<FiUsers></FiUsers></Button></Nav.Link>
      <Nav.Link href="/estoques"><Button variant="danger" size="lg">Estoque<AiOutlineDropbox></AiOutlineDropbox></Button></Nav.Link>
      <Nav.Link href="/pedidos"><Button variant="danger" size="lg">Pedidos<BsFillBoxSeamFill></BsFillBoxSeamFill></Button></Nav.Link>
      <Nav.Link href="/produtos"><Button variant="danger" size="lg">Produtos<MdProductionQuantityLimits></MdProductionQuantityLimits></Button></Nav.Link>
      <Nav.Link href="/carrinhos"><Button variant="danger" size="lg">Carrinhos<BsFillCartCheckFill></BsFillCartCheckFill></Button></Nav.Link>
      <Nav.Link href="/funcionarios"><Button variant="danger" size="lg">Funcionários<FaUserTie></FaUserTie></Button></Nav.Link>
  
    </Nav>
     </Nav>
        </Offcanvas.Body>
      </Offcanvas>
   
      <Navbar bg="dark">
          <Navbar.Brand href="#home">
        <Button variant="danger" onClick={handleShow}>
        <BsBorderWidth></BsBorderWidth>
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