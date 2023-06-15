import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import {GrNewWindow} from 'react-icons/gr'

const index = () => {
  const [estoques, setEstoques] = useState([])

  useEffect(() => {
    setEstoques(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('estoques')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const estoques = getAll()
      estoques.splice(id,1)
      window.localStorage.setItem('estoques', JSON.stringify(estoques))
      setEstoques(estoques)
    }
  }
  return (
    <>
        <Pagina titulo='Estoque'>
        <Link href={'/estoques/form'} className='btn btn-danger mb-2' ><GrNewWindow></GrNewWindow>Novo</Link>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Sessão</th>
          <th>Preço</th>
          
       
        </tr>
      </thead>
      <tbody> 
        {estoques.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/estoques/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.produto}</td>
          <td>{item.quantidade}</td>
          <td>{item.sessao}</td>
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