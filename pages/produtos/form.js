import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import produtoValidator from '@/validators/produtoValidator'
import { mask } from 'remask'

const form = () => {
  const { push } = useRouter()
  const { register, handleSubmit,setValue, formState: { errors } } = useForm()
  function salvar(dados) {
    const produtos = JSON.parse(window.localStorage.getItem('produtos')) || []
    produtos.push(dados)
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
            <Button variant="info" onClick={handleSubmit(salvar)}>
              < AiFillSave className='me-1' /> Salvar
            </Button>
            <Link href={'/produtos'} className='ms-2 btn btn-danger' ><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>
      </Pagina>
    </>
  )
}

export default form