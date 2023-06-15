import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import funcionarioValidator from '@/validators/funcionarioValidator'
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
  
      setValue(name, mask(value,mascara))
  
    }
  return (
    <>
      <Pagina titulo='Funcionários'>
        <Form>
          <Form.Group className="mb-3" controlId="funcionario">
            <Form.Label>funcionário:</Form.Label>
            <Form.Control isInvalid={errors.funcionario} {...register('funcionario',funcionarioValidator.funcionario)} type="text" />
            {
              errors.funcionario &&
              <small>{errors.funcionario.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control isInvalid={errors.cpf} 
            {...register('cpf',funcionarioValidator.cpf)} mask="999.999.999-49"
              type="text"  onChange={handleChange}/>
              {
              errors.cpf &&
              <small>{errors.cpf.message}</small>
            }
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control isInvalid={errors.cep} mask="99.999-999"
            {...register('cep',funcionarioValidator.cep)}  type="text"
            onChange={handleChange} />
              {
              errors.cep&&
              <small>{errors.cep.message}</small>
            }
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control isInvalid={errors.telefone} mask="(99) 9 999-9999"
             {...register('telefone',funcionarioValidator.telefone)}  type="text"
             onChange={handleChange}/>
              {
              errors.telefone &&
              <small>{errors.telefone.message}</small>
            }
           
          </Form.Group>
          <div className='text-center'>
          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/funcionarios'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form