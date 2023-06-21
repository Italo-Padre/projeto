import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { GrNewWindow } from 'react-icons/gr'

const index = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setProdutos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir ?')) {
      const produtos = getAll()
      produtos.splice(id, 1)
      window.localStorage.setItem('produtos', JSON.stringify(produtos))
      setProdutos(produtos)
    }
  }
  return (
    <>
      <Pagina titulo='Produtos'>
        <Link href={'/produtos/form'} className='btn btn-info mb-2' ><GrNewWindow></GrNewWindow>Formulário</Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((item, i) => (
              <tr key={i}>
                <td >
                  <Link href={'/produtos/' + i}><BiEdit className='me-2 text-info' /></Link>
                  <FiDelete onClick={() => excluir(i)} />
                </td>
                <td>{item.produto}</td>
                <td>{item.preco}</td>
                <td>{item.quantidade}</td>
                <td>{item.descricao}</td>
                <td className='text-center'>
                  <Card.Img style={{ width: '10rem' }} src={item.foto} ></Card.Img>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default index