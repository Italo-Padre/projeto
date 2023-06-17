import Pagina from '@/componentes/Pagina'
import funcionarioValidator from '@/validators/funcionarioValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiFillSave } from 'react-icons/ai'
import {ImExit} from 'react-icons/im'
import { mask } from 'remask'


const form = () => {
  const {push} = useRouter()
  const {register, handleSubmit,setValue, formState:{errors}} = useForm ()
  function salvar(dados){
    const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || []
    funcionarios.push(dados)
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    push('/funcionarios')
  }
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name , mask(value,mascara))
  }
  return (
    <>
      <Pagina titulo='Funcionário'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome',funcionarioValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} {...register('email',funcionarioValidator.email)} type="text" />
            {
              errors.email &&
              <small>{errors.email.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control isInvalid={errors.cpf} mask="999.999.999-99" {...register('cpf',funcionarioValidator.cpf)} 
            type="text" onChange={handleChange } />
         
            {
              errors.cpf &&
              <small>{errors.cpf.message}</small>
            }
  
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control isInvalid={errors.bairro} {...register('bairro',funcionarioValidator.bairro)}  type="text" />
              {
              errors.bairro &&
              <small>{errors.bairro.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control isInvalid={errors.cep} mask="99999-999"
            {...register('cep',funcionarioValidator.cep)}  type="text"
            onChange={handleChange }/>
              {
              errors.cep &&
              <small>{errors.cep.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Estado:</Form.Label>
            <Form.Control isInvalid={errors.estado} {...register('estado',funcionarioValidator.estado)}  type="text" />
              {
              errors.estado &&
              <small>{errors.estado.message}</small>
            }
           
          </Form.Group>
          
          <div className='text-center'>
          <Button variant="info" onClick={handleSubmit(salvar)}>
         <AiFillSave className='me-1'/> Salvar
          </Button>
          <Link href={'/funcionarios'} className='ms-2 btn btn-danger' ><ImExit className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}
export default form