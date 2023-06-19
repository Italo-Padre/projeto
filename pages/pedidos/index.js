import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { GrNewWindow } from 'react-icons/gr'

const index = () => {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    setPedidos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('pedidos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir ?')) {
      const pedidos = getAll()
      pedidos.splice(id, 1)
      window.localStorage.setItem('pedidos', JSON.stringify(pedidos))
      setPedidos(pedidos)
    }
  }
  return (
    <>
      <Pagina titulo='Pedidos'>
        <Link href={'/pedidos/form'} className='btn btn-info mb-2' ><GrNewWindow></GrNewWindow>Formulário</Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((item, i) => (
              <tr key={i}>
                <td >
                  <Link href={'/pedidos/' + i}><BiEdit className='me-2 text-info' /></Link>

                  <FiDelete onClick={() => excluir(i)} />
                </td>
                <td>{item.produto}</td>
                <td>{item.quantidade}</td>
                <td>{item.valor}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default index