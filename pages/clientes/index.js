import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    setClientes(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('clientes')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const clientes = getAll()
      clientes.splice(id,1)
      window.localStorage.setItem('clientes', JSON.stringify(clientes))
      setClientes(clientes)
    }
  }
  return (
    <>
        <Pagina titulo='Clientes'>
        <Link href={'/clientes/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
          <th>Rua</th>
          <th>Cidade</th>
          <th>Bairro</th>
          <th>Cep</th>
          <th>Estado</th>
       
        </tr>
      </thead>
      <tbody> 
        {clientes.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/clientes/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.email}</td>
          <td>{item.senha}</td>
          <td>{item.rua}</td>
          <td>{item.cidade}</td>
          <td>{item.bairro}</td>
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