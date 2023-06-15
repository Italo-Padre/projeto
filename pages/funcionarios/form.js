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
      <Pagina titulo='Funcionários'>
        <Form>
          <Form.Group className="mb-3" controlId="funcionario">
            <Form.Label>funcionários:</Form.Label>
            <Form.Control isInvalid={errors.funcionario} {...register('funcionario',funcionarioValidator.funcionario)} type="text" />
            {
              errors.funcionario &&
              <small>{errors.funcionario.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control isInvalid={errors.cpf} {...register('cpf',funcionarioValidatorcpf)}  type="text" />
              {
              errors.cpf &&
              <small>{errors.cpf.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control isInvalid={errors.cep} {...register('cep',funcionarioValidator.cep)}  type="text" />
              {
              errors.cep&&
              <small>{errors.cep.message}</small>
            }
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control isInvalid={errors.telefone} {...register('telefone',funcionarioValidator.telefone)}  type="text" />
              {
              errors.telefone &&
              <small>{errors.telefone.message}</small>
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