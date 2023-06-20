const clienteValidator = {
  nome: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo é 4 caracteres'
    },
  },
    telefone: {
      required: 'O campo é obrigatório',
  },
  email: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo é 4 caracteres'
    },
  },
  rua: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 1,
      message: 'O mínimo é 1 caracteres '
    },
    maxLength: {
      value: 20,
      message: 'O máximo é 20 caracteres '
    },
  },
  cidade: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'O mínimo  é 3 caracteres '
    },
    maxLength: {
      value: 15,
      message: 'O máximo é 15 caracteres '
    },
  },
  cep: {
    required: 'O campo é obrigatório',
   
  },
  estado: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 2,
      message: 'mínimo 2 caracteres'
    },
  },
}

export default clienteValidator