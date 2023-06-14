import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const [produtos, setProdutos] = useState([])
  const [carrinhos, setCarrinhos] = useState([])
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()
  useEffect(() => {
    setProdutos(getAll)
  },[])
  function getAll(){
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  useEffect(()=> {
    if(query.id){
      const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos'))
      const carrinho = carrinhos[query.id]
      for(let atributo in carrinho){
        setValue(atributo,carrinho[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos')) || []
    carrinhos.splice(query.id, 1, dados)
    window.localStorage.setItem('carrinhos', JSON.stringify(carrinhos))
    push('/carrinhos')
  }
  return (
    <>
      <Pagina titulo='Carrinho'>
        <Form>
          <Form.Group className="mb-3" controlId="sessao">
            <Form.Label>Sessão:</Form.Label>
            <Form.Control {...register('sessao')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="produto">
            <Form.Label>Produto:</Form.Label>
            <Form.Control {...register('produto')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantidade">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control {...register('quantidade')}  type="text" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="preco">
            <Form.Label>Preço:</Form.Label>
            <Form.Control {...register('preco')}  type="text" />
           
          </Form.Group>
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/carrinhos'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form