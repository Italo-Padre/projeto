import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'


const Pagina = (props) => {
  return (
    <div>
      
      <div className='bg-secondary py-3 text-white text-center mb-3'>
        <h1>{props.titulo}</h1>
      </div>
      <Container>

      {props.children}
      </Container>
    </div>
  )
}

export default Pagina