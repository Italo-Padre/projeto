const produtoValidator = {
  produto: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo 4 caracteres'
    },
  },
  preco: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo é 1'
    },
    max: {
      value: 1000,
      message: ' O máximo é 1000'
    },
  },
  quantidade: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo é 1 '
    },
  },
  descricao: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 6,
      message: 'O mínimo 6 caracteres'
    },
    maxLength: {
      value: 30,
      message: 'O Máximo é 30 caracteres'
    },
  },
  foto: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 5,
      message: 'O mínimo 5 caracteres'
    },
  }
}
export default produtoValidator