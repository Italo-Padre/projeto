import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const index = () => {
  const [funcionarios , setFuncionarios] = useState([])

  useEffect(() => {
    setFuncionarios(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('funcionarios ')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const funcionarios = getAll()
      funcionarios .splice(id,1)
      window.localStorage.setItem('funcionarios ', JSON.stringify(funcionarios ))
      setFuncionarios (funcionarios )
    }
  }
  return (
    <>
        <Pagina titulo='Funcionários'>
        <Link href={'/produtos/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Preco</th>
          <th>Quantidade</th>
          <th>Descrição</th>
          <th>Foto</th>
          
       
        </tr>
      </thead>
      <tbody> 
        {funcionarios.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/funcionarios /'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.produto}</td>
          <td>{item.preco}</td>
          <td>{item.quantidade}</td>
          <td>{item.descricao}</td>
          <td>{item.foto}</td>
          
         
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index