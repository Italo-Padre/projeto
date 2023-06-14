import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import clienteValidator from '@/validators/clienteValidator'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm ()
  function salvar(dados){
    const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
    clientes.push(dados)
    window.localStorage.setItem('clientes', JSON.stringify(clientes))
    push('/clientes')
  }

  return (
    <>
      <Pagina titulo='Clientes'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome',clienteValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} {...register('email',clienteValidator.email)} type="text" />
            {
              errors.email &&
              <small>{errors.email.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha:</Form.Label>
            <Form.Control isInvalid={errors.senha} {...register('senha',clienteValidator.senha)} type="text" />
            {
              errors.senha &&
              <small>{errors.senha.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="rua">
            <Form.Label>Rua:</Form.Label>
            <Form.Control isInvalid={errors.rua} {...register('rua',clienteValidator.rua)} type="text" />
            {
              errors.rua &&
              <small>{errors.rua.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control isInvalid={errors.cidade} {...register('cidade',clienteValidator.cidade)} type="text" />
            {
              errors.cidade &&
              <small>{errors.cidade.message}</small>
            }
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control isInvalid={errors.bairro} {...register('bairro',clienteValidator.bairro)}  type="text" />
              {
              errors.bairro &&
              <small>{errors.bairro.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep:</Form.Label>
            <Form.Control isInvalid={errors.cep} {...register('cep',clienteValidator.cep)}  type="text" />
              {
              errors.cep &&
              <small>{errors.cep.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Estado:</Form.Label>
            <Form.Control isInvalid={errors.estado} {...register('estado',clienteValidator.estado)}  type="text" />
              {
              errors.estado &&
              <small>{errors.estado.message}</small>
            }
           
          </Form.Group>
          <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/clientes'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form