import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import clienteValidator from '@/validators/clienteValidator'
import { mask } from 'remask'

const form = () => {
  const { push } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  function salvar(dados) {
    const clientes = JSON.parse(window.localStorage.getItem('clientes')) || []
    clientes.push(dados)
    window.localStorage.setItem('clientes', JSON.stringify(clientes))
    push('/clientes')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  return (
    <>
      <Pagina titulo='Clientes'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome', clienteValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control isInvalid={errors.telefone} mask="(99) 9999-9999"
            {...register('telefone', clienteValidator.telefone)} type="text" 
            onChange={handleChange}/>
            {
              errors.telefone &&
              <small>{errors.telefone.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} {...register('email', clienteValidator.email)} type="text" />
            {
              errors.email &&
              <small>{errors.email.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="rua">
            <Form.Label>Rua:</Form.Label>
            <Form.Control isInvalid={errors.rua} {...register('rua', clienteValidator.rua)} type="text" />
            {
              errors.rua &&
              <small>{errors.rua.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control isInvalid={errors.cidade} {...register('cidade', clienteValidator.cidade)} type="text" />
            {
              errors.cidade &&
              <small>{errors.cidade.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control isInvalid={errors.cep} mask="99999-999"
              {...register('cep', clienteValidator.cep)} type="text"
              onChange={handleChange} />
            {
              errors.cep &&
              <small>{errors.cep.message}</small>
            }

          </Form.Group>
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Estado:</Form.Label>
            <Form.Control isInvalid={errors.estado} {...register('estado', clienteValidator.estado)} type="text" />
            {
              errors.estado &&
              <small>{errors.estado.message}</small>
            }

          </Form.Group>

          <div className='text-center'>
            <Button variant="info" onClick={handleSubmit(salvar)}>
              <AiFillSave className='me-1' /> Salvar
            </Button>
            <Link href={'/clientes'} className='ms-2 btn btn-danger' ><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}
export default form