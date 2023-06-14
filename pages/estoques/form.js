import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import produtoValidator from '@/validators/produtoValidator'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm ()
  function salvar(dados){
    const produtos = JSON.parse(window.localStorage.getItem('produtos')) || []
    produtos.push(dados)
    window.localStorage.setItem('produtos', JSON.stringify(produtos))
    push('/produtos')
  }

  return (
    <>
      <Pagina titulo='Produtos'>
        <Form>
          <Form.Group className="mb-3" controlId="produto">
            <Form.Label>Produto:</Form.Label>
            <Form.Control isInvalid={errors.produto} {...register('produto',produtoValidator.produto)} type="text" />
            {
              errors.produto &&
              <small>{errors.produto.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="preco">
            <Form.Label>Preço:</Form.Label>
            <Form.Control isInvalid={errors.preco} {...register('preco',produtoValidator.preco)}  type="text" />
              {
              errors.preco &&
              <small>{errors.preco.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantidade">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control isInvalid={errors.quantidade} {...register('quantidade',produtoValidator.quantidade)}  type="text" />
              {
              errors.quantidade &&
              <small>{errors.quantidade.message}</small>
            }
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="descricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control isInvalid={errors.descricao} {...register('descricao',produtoValidator.descricao)}  type="text" />
              {
              errors.descricao &&
              <small>{errors.descricao.message}</small>
            }
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="foto">
            <Form.Label>Foto:</Form.Label>
            <Form.Control isInvalid={errors.foto} {...register('foto',produtoValidator.foto)}  type="text" />
              {
              errors.foto &&
              <small>{errors.foto.message}</small>
            }
           
          </Form.Group>
          <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/produtos'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form