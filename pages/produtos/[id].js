import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import produtoValidator from '@/validators/produtoValidator'
import { AiFillSave } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import { mask } from 'remask'

const editar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const produtos = JSON.parse(window.localStorage.getItem('produtos'))
      const produto = produtos[query.id]
      for (let atributo in produto) {
        setValue(atributo, produto[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const produtos = JSON.parse(window.localStorage.getItem('produtos')) || []
    produtos.splice(query.id, 1, dados)
    window.localStorage.setItem('produtos', JSON.stringify(produtos))
    push('/produtos')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  return (
    <>
      <Pagina titulo='Produtos'>
      <Form>
          <Form.Group className="mb-3" controlId="produto">
            <Form.Label>Produto:</Form.Label>
            <Form.Control isInvalid={errors.produto} {...register('produto', produtoValidator.produto)} type="text" />
            {
              errors.produto &&
              <small>{errors.produto.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="preco">
            <Form.Label>Preço:</Form.Label>
            <Form.Control isInvalid={errors.preco} mask="R$ 99,99" 
            {...register('preco', produtoValidator.preco)} type="text"
            onChange={handleChange}/>
            {
              errors.preco &&
              <small>{errors.preco.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantidade">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control isInvalid={errors.quantidade} {...register('quantidade', produtoValidator.quantidade)} type="text" />
            {
              errors.quantidade &&
              <small>{errors.quantidade.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="descricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control isInvalid={errors.descricao} {...register('descricao', produtoValidator.descricao)} type="text" />
            {
              errors.descricao &&
              <small>{errors.descricao.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="foto">
            <Form.Label>Foto:</Form.Label>
            <Form.Control isInvalid={errors.foto} {...register('foto', produtoValidator.foto)} type="text" />
            {
              errors.foto &&
              <small>{errors.foto.message}</small>
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
            <Link href={'/produtos'} className='ms-2 btn btn-danger' ><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default editar