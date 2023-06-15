import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import {GrNewWindow} from 'react-icons/gr'
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
        <Link href={'/funcionarios/form'} className='btn btn-danger mb-2' ><GrNewWindow></GrNewWindow>Novo</Link>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Funcionários</th>
          <th>CPF</th>
          <th>CEP</th>
          <th>Telefone</th>

          
       
        </tr>
      </thead>
      <tbody> 
        {funcionarios.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/funcionarios /'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.funcionario}</td>
          <td>{item.cpf}</td>
          <td>{item.cep}</td>
          <td>{item.telefone}</td>
          
          
         
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index