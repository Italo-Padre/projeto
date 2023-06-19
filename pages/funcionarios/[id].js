import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import funcionarioValidator from '@/validators/funcionarioValidator'
import { AiFillSave } from 'react-icons/ai'
import { mask } from 'remask'
import { ImExit } from 'react-icons/im'


const editar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios'))
      const funcionario = funcionarios[query.id]
      for (let atributo in funcionario) {
        setValue(atributo, funcionario[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios')) || []
    funcionarios.splice(query.id, 1, dados)
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    push('/funcionarios')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  return (
    <>
      <Pagina titulo='Funcionário'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome', funcionarioValidator.nome)} type="text" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control isInvalid={errors.email} {...register('email', funcionarioValidator.email)} type="text" />
            {
              errors.email &&
              <small>{errors.email.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF:</Form.Label>
            <Form.Control isInvalid={errors.cpf} mask="999.999.999-99" {...register('cpf', funcionarioValidator.cpf)}
              type="text" onChange={handleChange} />

            {
              errors.cpf &&
              <small>{errors.cpf.message}</small>
            }

          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP:</Form.Label>
            <Form.Control isInvalid={errors.cep} mask="99999-999"
              {...register('cep', funcionarioValidator.cep)} type="text"
              onChange={handleChange} />
            {
              errors.cep &&
              <small>{errors.cep.message}</small>
            }

          </Form.Group>
          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Estado:</Form.Label>
            <Form.Control isInvalid={errors.estado} {...register('estado', funcionarioValidator.estado)} type="text" />
            {
              errors.estado &&
              <small>{errors.estado.message}</small>
            }

          </Form.Group>
          <div className='text-center'>
            <Button variant="info" onClick={handleShow}>< AiFillSave className='me-1' />
              Editar
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title><h2>Importante</h2></Modal.Title>
              </Modal.Header>
              <Modal.Body>Tem certeza que deseja editar?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}><ImExit className='me-1' />
                  Fechar
                </Button>
                <Button variant="info" onClick={handleSubmit(salvar)}>
                  < AiFillSave className='me-1' /> Salvar
                </Button>
              </Modal.Footer>
            </Modal>
            <Link href={'/funcionarios'} className='ms-2 btn btn-danger' ><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default editar