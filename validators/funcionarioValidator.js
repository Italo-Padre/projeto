const funcionarioValidator = {
  nome: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo é 4 caracteres'
    },
    maxLength: {
      value: 20,
      message: ' O máximo é 20 caracteres'
    },
  },
  email: {
    required: 'O campo é obrigatório',
      minLength: {
        value: 4,
        message: ' O mínimo é 4 caracteres'
      },
  },
  cep: {
    required: 'O campo é obrigatório',
  
  },
  cpf: {
    required: 'O campo é obrigatório',
   
  },
  telefone: {
    required: 'O campo é obrigatório',
  },
  estado: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 2,
      message: 'Minimo 2 caracteres'
    },
  }
}
export default funcionarioValidator