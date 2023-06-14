import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    setUsuarios(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('usuarios')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const usuarios = getAll()
      usuarios.splice(id,1)
      window.localStorage.setItem('usuarios', JSON.stringify(usuarios))
      setUsuarios(usuarios)
    }
  }
  return (
    <>
        <Pagina titulo='Usuarios'>
        <Link href={'/usuarios/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Senha</th>
       
        </tr>
      </thead>
      <tbody> 
        {usuarios.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/usuarios/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.senha}</td>
         
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index