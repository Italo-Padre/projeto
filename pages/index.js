import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/componentes/Pagina';


const index = () => {
  return (

    
    <>
    <Pagina>
<Container>
   <Row md={3}>
  <Col  >
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }} src="https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png" />
      <Card.Body>
        <Card.Title>Produtos</Card.Title>
      </Card.Body>
    </Card><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }}  src="https://w7.pngwing.com/pngs/39/283/png-transparent-user-user-people-linear-icon-user-infographic-people-monochrome.png" />
      <Card.Body>
        <Card.Title>Usuários</Card.Title>
      </Card.Body>
    </Card></Col>
   <Col>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }} src="https://neilpatel.com/wp-content/uploads/2019/06/ilustracao-do-titulo-cliente-e-simbolos-relacionad.jpeg" />
      <Card.Body>
        <Card.Title>Clientes</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }}  src="https://blog.jetbov.com/wp-content/uploads/2020/01/estoque-2.png" />
      <Card.Body>
        <Card.Title>Estoque</Card.Title>
      </Card.Body>
    </Card>
   </Col>
  <Col>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnINHIgwwE8YPHTdcNbhl2dcogGnzV5ustcle3L8o_yaZl-iHBLvOlLtgVYyvbkDYR76o&usqp=CAU" />
      <Card.Body>
        <Card.Title>Pedidos</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '18rem' }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUIDyyU_x8qjaIpTel8YAweXx1pNnjb2hFQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Carrinho</Card.Title>
      </Card.Body>
    </Card>
   </Col>
   
     </Row>
    </Container>
    </Pagina>
    </>
  )
}

export default index