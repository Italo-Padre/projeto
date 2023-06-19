const funcionarioValidator = {
  nome: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: 'Minimo 4 caracteres'
    },
  },
  email: {
    required: 'O campo é obrigatório',
  },
  cep: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 8,
      message: 'Minimo 8 caracteres'
    },
    maLength: {
      value: 8,
      message: 'Máximo 8 caracteres'
    },
  },
  cpf: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 11,
      message: 'Minimo 11 caracteres'
    },
    mazxLength: {
      value: 11,
      message: 'Máximo 11 caracteres'
    },
  },
  telefone: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 6,
      message: 'Minimo 6 caracteres'
    },
  }
}
export default funcionarioValidator