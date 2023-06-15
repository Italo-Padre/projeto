import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import pedidoValidator from '@/validators/pedidoValidator'
import { useState } from 'react'
import { useEffect } from 'react'
import { mask } from 'remask'


const form = () => {
  const [produtos, setProdutos] = useState([])
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue,formState:{errors}} = useForm ()
  useEffect(() => {
    setProdutos(getAll)
  },[])
  function getAll(){
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }

  useEffect(()=> {
    if(query.id){
      const pedidos = JSON.parse(window.localStorage.getItem('pedidos'))
      const pedido = pedidos[query.id]
      for(let atributo in pedido){
        setValue(atributo,pedido[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const pedidos = JSON.parse(window.localStorage.getItem('pedidos')) || []
    pedidos.push(dados)
    window.localStorage.setItem('pedidos', JSON.stringify(pedidos))
    push('/pedidos')
  }
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name , mask(value,mascara))
  }

  return (
    <>
      <Pagina titulo='Pedidos'>
      
      <Form>
      <Form.Group className="mb-3">
          <Form.Label >Produto:</Form.Label>
          <Form.Select  isInvalid={true}  {...register('produto',pedidoValidator.produto)} id="produto">
            {produtos.map(item=>(
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
          <Form.Control isInvalid={true} {...register('quantidade',pedidoValidator.quantidade)} id="quantidade"  />
          {
          errors.quantidade &&
          <small>{errors.quantidade.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Valor:</Form.Label>
          <Form.Control isInvalid={true} mask="R$"
           {...register('valor',pedidoValidator.valor)} id="valor" 
           onChange={handleChange } />
          {
          errors.valor &&
          <small>{errors.valor.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subtotal:</Form.Label>
          <Form.Control isInvalid={true} mask="R$"
           {...register('subtotal',pedidoValidator.subtotal)} id="subtotal" 
           onChange={handleChange } />
          {
          errors.subtotal &&
          <small>{errors.subtotal.message}</small>
        }
        </Form.Group>
        <Button variant="success" onClick={handleSubmit(salvar)}>< AiOutlineCheck className='me-1'/>Salvar</Button>
        <Link href={'/pedidos'} className='ms-2 btn btn-danger'><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
    </Form>

      </Pagina>
    </>
  )
}

export default form