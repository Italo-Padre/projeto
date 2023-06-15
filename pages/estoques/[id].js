import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import estoqueValidator from '@/validators/estoqueValidator'

const form = () => {
  const [produtos, setProdutos] = useState([])
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue, formState:{errors}} = useForm ()
  useEffect(() => {
    setProdutos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('produtos')) || []
  }



  useEffect(()=> {
    if(query.id){
      const estoques = JSON.parse(window.localStorage.getItem('estoques'))
      const estoque = estoques[query.id]
      for(let atributo in estoque){
        setValue(atributo,estoque[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const estoques = JSON.parse(window.localStorage.getItem('estoques')) || []
    estoques.splice(query.id, 1, dados)
    window.localStorage.setItem('estoques', JSON.stringify(estoques))
    push('/estoques')
  }
  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name , mask(value,mascara))
  }
  return (
    <>
      <Pagina titulo='Estoques'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label >Produto:</Form.Label>
          <Form.Select  isInvalid={true}  {...register('produto',estoqueValidator.produto)} id="produto">
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
          <Form.Label>Sessão:</Form.Label>
          <Form.Control isInvalid={true} {...register('sessao',estoqueValidator.sessao)} id="sessao"  />
          {
          errors.sessao &&
          <small>{errors.sessao.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control isInvalid={true} mask="R$"
           {...register('preco',estoqueValidator.preco)} id="preco" 
           onChange={handleChange} />
          {
          errors.preco &&
          <small>{errors.preco.message}</small>
        }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantidade:</Form.Label>
          <Form.Control isInvalid={true} {...register('quantidade',estoqueValidator.quantidade)} id="quantidade"  />
          {
          errors.quantidade &&
          <small>{errors.quantidade.message}</small>
        }
        </Form.Group>
        <Button variant="success" onClick={handleSubmit(salvar)}>< AiOutlineCheck className='me-1'/>Salvar</Button>
        <Link href={'/estoques'} className='ms-2 btn btn-danger'><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
    </Form>
      </Pagina>
    </>
  )
}

export default form