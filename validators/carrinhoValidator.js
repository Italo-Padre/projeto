const carrinhoValidator = {
  sessao: {
    required: 'O campo é obrigatório',
    min: {
      value: 4,
      message: 'O mínimo é  1'
    },
    max: {
      value: 50,
      message: 'O máximo é  50'
    },
  },
  produto: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo 4 caracteres'
    },
  },
  quantidade: {
    required: 'O campo é obrigatório',
    minh: {
      value: 1,
      message: 'O mínimo é 1 '
    },
  },
  preco: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo  é 1 '
    },
  },
}

export default carrinhoValidator