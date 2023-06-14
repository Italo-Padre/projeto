import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import usuarioValidator from '@/validators/usuarioValidator'

const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm ()
  function salvar(dados){
    const usuarios = JSON.parse(window.localStorage.getItem('usuarios')) || []
    usuarios.push(dados)
    window.localStorage.setItem('usuarios', JSON.stringify(usuarios))
    push('/usuarios')
  }

  return (
    <>
      <Pagina titulo='Usuario'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome',usuarioValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha:</Form.Label>
            <Form.Control isInvalid={errors.senha} {...register('senha',usuarioValidator.senha)}  type="text" />
              {
              errors.senha &&
              <small>{errors.senha.message}</small>
            }
           
          </Form.Group>
          <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/usuarios'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form