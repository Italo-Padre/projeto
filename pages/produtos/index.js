import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import {GrNewWindow} from 'react-icons/gr'

const index = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setProdutos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const produtos = getAll()
      produtos.splice(id,1)
      window.localStorage.setItem('produtos', JSON.stringify(produtos))
      setProdutos(produtos)
    }
  }
  return (
    <>
        <Pagina titulo='Produtos'>
        <Link href={'/produtos/form'} className='btn btn-danger mb-2' ><GrNewWindow></GrNewWindow>Novo</Link>
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
        {produtos.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/produtos/'+i}><AiFillEdit className='me-2' /></Link>
            
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