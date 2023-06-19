import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { GrNewWindow } from 'react-icons/gr'

const index = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    setClientes(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('clientes')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir ?')) {
      const clientes = getAll()
      clientes.splice(id, 1)
      window.localStorage.setItem('clientes', JSON.stringify(clientes))
      setClientes(clientes)
    }
  }
  return (
    <>
      <Pagina titulo='Clientes'>
        <Link href={'/clientes/form'} className='btn btn-info mb-2' ><GrNewWindow></GrNewWindow>Formulário</Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Rua</th>
              <th>Cidade</th>
              <th>CEP</th>
              <th>Estado</th>

            </tr>
          </thead>
          <tbody>
            {clientes.map((item, i) => (
              <tr key={i}>
                <td >
                  <Link href={'/clientes/' + i}><BiEdit className='me-2 text-info' /></Link>

                  <FiDelete onClick={() => excluir(i)} />
                </td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.rua}</td>
                <td>{item.cidade}</td>
                <td>{item.cep}</td>
                <td>{item.estado}</td>
              </tr>
            ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default index