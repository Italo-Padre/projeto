import React from 'react'
import { Button, Card, Col, Container, Row,CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/componentes/Pagina';
import Link from 'next/link';


const index = () => {
  return (
    <>
    <Pagina>
<Container>
  <CardGroup>
  <Card className='m-3' style={{ width: '17rem' }}>
     <Link href={"/produtos"}> <Card.Img  variant="top"  src="https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png" />
      </Link> <Card.Body>
        <Card.Title>Produtos</Card.Title>
      </Card.Body>
    </Card>
     <Card className='m-3' style={{ width: '17rem' }}>
      <Link href={"/funcionarios"}><Card.Img variant="top" src="https://bellunotec.com.br/wp-content/uploads/2017/05/86390-saiba-como-aumentar-a-retencao-de-funcionarios-na-empresa.png" />
      </Link>
      <Card.Body>
        <Card.Title>funcionários</Card.Title>
      </Card.Body>
    </Card>
   <Card className='m-3' style={{ width: '17rem' }}>
   <Link href={"/clientes"}><Card.Img variant="top"  src="https://neilpatel.com/wp-content/uploads/2019/06/ilustracao-do-titulo-cliente-e-simbolos-relacionad.jpeg" />
      </Link><Card.Body>
        <Card.Title>Clientes</Card.Title>
      </Card.Body>
    </Card>
    </CardGroup>
    <CardGroup>
    <Card className='m-3' style={{ width: '17rem' }}>
    <Link href={"/estoques"}><Card.Img variant="top"   src="https://blog.jetbov.com/wp-content/uploads/2020/01/estoque-2.png" />
    </Link><Card.Body>
        <Card.Title>Estoque</Card.Title>
      </Card.Body>
    </Card>
   <Card className='m-3' style={{ width: '17rem' }}>
   <Link href={"/pedidos"}><Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnINHIgwwE8YPHTdcNbhl2dcogGnzV5ustcle3L8o_yaZl-iHBLvOlLtgVYyvbkDYR76o&usqp=CAU" />
       </Link>
       <Card.Body>
        <Card.Title>Pedidos</Card.Title>
      </Card.Body>
    </Card>
    <Card className='m-3' style={{ width: '17rem' }}>
    <Link href={"/carrinhos"}><Card.Img variant="top"   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUIDyyU_x8qjaIpTel8YAweXx1pNnjb2hFQ&usqp=CAU" />
    </Link>
    <Card.Body>
        <Card.Title>Carrinho</Card.Title>
      </Card.Body>
    </Card>
    </CardGroup>
    </Container>
    </Pagina>
    </>
  )
}
export default index