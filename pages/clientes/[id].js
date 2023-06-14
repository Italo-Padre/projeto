import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      const clientes = JSON.parse(window.localStorage.getItem('clientes'))
      const cliente = clientes[query.id]
      for(let atributo in cliente){
        setValue(atributo,cliente[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
    clientes.splice(query.id, 1, dados)
    window.localStorage.setItem('clientes', JSON.stringify(clientes))
    push('/clientes')
  }
  return (
    <>
      <Pagina titulo='Clientes'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control {...register('nome')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control {...register('email')}  type="text" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="rua">
            <Form.Label>Rua:</Form.Label>
            <Form.Control {...register('rua')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control {...register('cidade')}  type="text" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control {...register('bairro')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>Cep:</Form.Label>
            <Form.Control {...register('cep')}  type="text" />
           
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="estado">
            <Form.Label>Estado:</Form.Label>
            <Form.Control {...register('estado')}  type="text" />
           
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