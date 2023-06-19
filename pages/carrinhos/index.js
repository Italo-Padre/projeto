import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { BiEdit } from 'react-icons/bi'
import { GrNewWindow } from 'react-icons/gr'

const index = () => {
  const [carrinhos, setCarrinhos] = useState([])

  useEffect(() => {
    setCarrinhos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('carrinhos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir ?')) {
      const carrinhos = getAll()
      carrinhos.splice(id, 1)
      window.localStorage.setItem('carrinhos', JSON.stringify(carrinhos))
      setCarrinhos(carrinhos)
    }
  }
  return (
    <>
      <Pagina titulo='Carrinho'>
        <Link href={'/carrinhos/form'} className='btn btn-info mb-2 ' ><GrNewWindow></GrNewWindow>Formulário</Link>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Sessao</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <td>Preço</td>

            </tr>
          </thead>
          <tbody>
            {carrinhos.map((item, i) => (
              <tr key={i}>
                <td >
                  <Link href={'/carrinhos/' + i}><BiEdit className='me-2 text-info' /></Link>

                  <FiDelete onClick={() => excluir(i)} />
                </td>
                <td>{item.sessao}</td>
                <td>{item.produto}</td>
                <td>{item.quantidade}</td>
                <td>{item.preco}</td>


              </tr>
            ))}

          </tbody>
        </Table>
      </Pagina>
    </>
  )
}

export default index