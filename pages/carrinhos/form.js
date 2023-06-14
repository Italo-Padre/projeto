import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import carrinhoValidator from '@/validators/carrinhoValidator'
import { useState } from 'react'
import { useEffect } from 'react'


const form = () => {
  const [produtos, setProdutos] = useState([])

  const {push} = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm ()
  
  useEffect(() => {
    setProdutos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }


  function salvar(dados){
    const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos')) || []
    carrinhos.push(dados)
    window.localStorage.setItem('carrinhos', JSON.stringify(carrinhos))
    push('/carrinhos')
  }

  return (
    <>
      <Pagina titulo='Carrinho'>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Sessão</Form.Label>
          <Form.Control isInvalid={true} {...register('sessao',carrinhoValidator.sessao)} id="sessa"  />
          {
          errors.sessao &&
          <small>{errors.sessao.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Produto:</Form.Label>
          <Form.Select  isInvalid={true}  {...register('produto',carrinhoValidator.produto)} id="produto">
            {produtos.map(item=>(
                <option>{item.produto}</option>
            ))}
              {
          errors.produto &&
          <small>{errors.produto.message}</small>
        }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantidade:</Form.Label>
          <Form.Control isInvalid={true} {...register('quantidade',carrinhoValidator.quantidade)} id="quantidade"  />
          {
          errors.quantidade &&
          <small>{errors.quantidade.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control isInvalid={true} {...register('preco',carrinhoValidator.preco)} id="preco"  />
          {
          errors.preco &&
          <small>{errors.preco.message}</small>
        }
        </Form.Group>
        <Button variant="success" onClick={handleSubmit(salvar)}>< AiOutlineCheck className='me-1'/>Salvar</Button>
        <Link href={'/carrinhos'} className='ms-2 btn btn-danger'><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
    </Form>

      </Pagina>
    </>
  )
}

export default form