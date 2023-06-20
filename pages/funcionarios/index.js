import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { GrNewWindow } from 'react-icons/gr'

const index = () => {
  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    setFuncionarios(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('funcionarios')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir ?')) {
      const funcionarios = getAll()
      funcionarios.splice(id, 1)
      window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
      setFuncionarios(funcionarios)
    }
  }
  return (
    <>
      <Pagina titulo='Funcionários'>
        <Link href={'/funcionarios/form'} className='btn btn-info mb-2' ><GrNewWindow></GrNewWindow>Formulário</Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>CPF</th>
              <th>CEP</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((item, i) => (
              <tr key={i}>
                <td >
                  <Link href={'/funcionarios/' + i}><BiEdit className='me-2 text-info' /></Link>

                  <FiDelete onClick={() => excluir(i)} />
                </td>
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td>{item.email}</td>
                <td>{item.cpf}</td>
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