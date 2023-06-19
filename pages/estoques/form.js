import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiFillSave } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import estoqueValidator from '@/validators/estoqueValidator'
import { mask } from 'remask'

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
    const estoques = JSON.parse(window.localStorage.getItem('estoques')) || []
    estoques.push(dados)
    window.localStorage.setItem('estoques', JSON.stringify(estoques))
    push('/estoques')
  }
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  return (
    <>
      <Pagina titulo='Estoque'>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label >Produto:</Form.Label>
            <Form.Select isInvalid={true}  {...register('produto', estoqueValidator.produto)} id="produto">
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
            <Form.Label>Sessão:</Form.Label>
            <Form.Control isInvalid={true} {...register('sessao', estoqueValidator.sessao)} id="sessao" />
            {
              errors.sessao &&
              <small>{errors.sessao.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preço</Form.Label>
            <Form.Control isInvalid={true} mask="R$"
              {...register('preco', estoqueValidator.preco)} id="preco"
              onChange={handleChange} />
            {
              errors.preco &&
              <small>{errors.preco.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control isInvalid={true} {...register('quantidade', estoqueValidator.quantidade)} id="quantidade" />
            {
              errors.quantidade &&
              <small>{errors.quantidade.message}</small>
            }
          </Form.Group>
          <div className='text-center'>
            <Button variant="info" onClick={handleSubmit(salvar)}>< AiFillSave className='me-1' />Salvar</Button>
            <Link href={'/carrinhos'} className='ms-2 btn btn-danger'><ImExit className='me-1' />Voltar</Link>
          </div>
        </Form>

      </Pagina>
    </>
  )
}

export default form