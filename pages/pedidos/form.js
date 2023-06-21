import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import pedidoValidator from '@/validators/pedidoValidator'
import { useState } from 'react'
import { useEffect } from 'react'
import { mask } from 'remask'
import CurrencyInput from 'react-currency-masked-input'

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
    const pedidos = JSON.parse(window.localStorage.getItem('pedidos')) || []
    pedidos.push(dados)
    window.localStorage.setItem('pedidos', JSON.stringify(pedidos))
    push('/pedidos')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  return (
    <>
      <Pagina titulo='Pedidos'>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label >Produto:</Form.Label>
            <Form.Select isInvalid={true}  {...register('produto', pedidoValidator.produto)} id="produto">
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
            <Form.Control isInvalid={true} {...register('quantidade', pedidoValidator.quantidade)} id="quantidade" />
            {
              errors.quantidade &&
              <small>{errors.quantidade.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="valor">
            <Form.Label>Valor:</Form.Label>
             <CurrencyInput name='myInput' required/>
            {
              errors.valor &&
              <small>{errors.valor.message}</small>
            }
          </Form.Group>
          <div className='text-center'>
            <Button variant="info" onClick={handleSubmit(salvar)}><AiFillSave className='me-1' />Salvar</Button>
            <Link href={'/pedidos'} className='ms-2 btn btn-danger'><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>

      </Pagina>
    </>
  )
}

export default form