import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave, AiOutlineShoppingCart } from 'react-icons/ai'
import carrinhoValidator from '@/validators/carrinhoValidator'
import { useState } from 'react'
import { useEffect } from 'react'
import { mask } from 'remask'
import { ImExit } from 'react-icons/im'


const form = () => {

  const [produtos, setProdutos] = useState([])

  const { push } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    setProdutos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }


  function salvar(dados) {
    const carrinhos = JSON.parse(window.localStorage.getItem('carrinhos')) || []
    carrinhos.push(dados)
    window.localStorage.setItem('carrinhos', JSON.stringify(carrinhos))
    push('/carrinhos')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }

  return (
    <>
      <Pagina titulo='Carrinho'><AiOutlineShoppingCart className='me-1' />

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
            <Form.Control isInvalid={true} mask="R$"

              {...register('preco', carrinhoValidator.preco)} id="preco"
              onChange={handleChange} />
            {
              errors.preco &&
              <small>{errors.preco.message}</small>
            }
          </Form.Group>
          <div className='text-center'>
            <Button variant="info" onClick={handleSubmit(salvar)}><AiFillSave className='me-1' />Salvar</Button>
            <Link href={'/carrinhos'} className='ms-2 btn btn-danger'><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>

      </Pagina>
    </>
  )
}

export default form