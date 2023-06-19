import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { BsBorderWidth, BsFillCartCheckFill, BsFillBoxSeamFill } from 'react-icons/bs'
import { AiOutlineDropbox, AiFillHome } from 'react-icons/ai'
import { FaUserTie } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { MdProductionQuantityLimits } from 'react-icons/md'

const Pagina = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant="pills" activeKey="1" >
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link href="/inicio"><Button variant="info" size="lg">Início<AiFillHome></AiFillHome></Button></Nav.Link>
              <Nav.Link href="/clientes"><Button variant="info" size="lg">Clientes<FiUsers></FiUsers></Button></Nav.Link>
              <Nav.Link href="/estoques"><Button variant="info" size="lg">Estoque<AiOutlineDropbox></AiOutlineDropbox></Button></Nav.Link>
              <Nav.Link href="/pedidos"><Button variant="info" size="lg">Pedidos<BsFillBoxSeamFill></BsFillBoxSeamFill></Button></Nav.Link>
              <Nav.Link href="/produtos"><Button variant="info" size="lg">Produtos<MdProductionQuantityLimits></MdProductionQuantityLimits></Button></Nav.Link>
              <Nav.Link href="/carrinhos"><Button variant="info" size="lg">Carrinhos<BsFillCartCheckFill></BsFillCartCheckFill></Button></Nav.Link>
              <Nav.Link href="/funcionarios"><Button variant="info" size="lg">Funcionários<FaUserTie></FaUserTie></Button></Nav.Link>
            </Nav>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar bg="dark" >
        <Navbar.Brand href="#home">
          <Button variant="info" onClick={handleShow}>
            <BsBorderWidth></BsBorderWidth>
          </Button>
        </Navbar.Brand>
      </Navbar>
      <h1 className='bg-dark py-3 text-white mb-5 text-center'>{props.titulo}</h1>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default Pagina