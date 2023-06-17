import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import pedidoValidator from '@/validators/pedidoValidator'
import { useState } from 'react'
import { useEffect } from 'react'
import { mask } from 'remask'
import {AiFillSave } from 'react-icons/ai'
import {ImExit} from 'react-icons/im'

const editar = () => {
  
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
        <div className='text-center'>
          <Button variant="info" onClick={handleShow}>< AiFillSave className='me-1'/>
       Editar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2>Importante</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja editar?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}><ImExit className='me-1'/>
            Fechar
          </Button>
          <Button variant="info" onClick={handleSubmit(salvar)}>
         < AiFillSave className='me-1'/> Salvar
          </Button>
        </Modal.Footer>
      </Modal>
     
        <Link href={'/pedidos'} className='ms-2 btn btn-danger'><ImExit className='me-1'/>Voltar</Link>
        </div>
    </Form>

      </Pagina>
    </>
  )
}

export default editar