import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import carrinhoValidator from '@/validators/carrinhoValidator'
import { ImExit } from 'react-icons/im'
import { AiFillSave } from 'react-icons/ai'


const editar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [produtos, setProdutos] = useState([])
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  useEffect(() => {
    setProdutos(getAll)
  }, [])
  function getAll() {
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  useEffect(() => {
    if (query.id) {
      const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos'))
      const carrinho = carrinhos[query.id]
      for (let atributo in carrinho) {
        setValue(atributo, carrinho[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos')) || []
    carrinhos.splice(query.id, 1, dados)
    window.localStorage.setItem('carrinhos', JSON.stringify(carrinhos))
    push('/carrinhos')
  }
  return (
    <>
      <Pagina titulo='Carrinho'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Sessão</Form.Label>
            <Form.Control isInvalid={true} {...register('sessao', carrinhoValidator.sessao)} id="sessa" />
            {
              errors.sessao &&
              <small>{errors.sessao.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label >Produto:</Form.Label>
            <Form.Select isInvalid={true}  {...register('produto', carrinhoValidator.produto)} id="produto">
              {produtos.map(item => (
                <option>{item.produto}</option>
              ))}
              {
                errors.produto &&
                <small>{errors.produto.message}</small>
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control isInvalid={true} {...register('quantidade', carrinhoValidator.quantidade)} id="quantidade" />
            {
              errors.quantidade &&
              <small>{errors.quantidade.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preço</Form.Label>
            <Form.Control isInvalid={true} {...register('preco', carrinhoValidator.preco)} id="preco" />
            {
              errors.preco &&
              <small>{errors.preco.message}</small>
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
            <Link href={'/carrinhos'} className='ms-2 btn btn-danger' ><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default editar