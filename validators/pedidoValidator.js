const pedidoValidator = {
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
  valor: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo  é 1 '
    },
    max: {
      value: 2000,
      message: 'O máximo é 2000 '
    },
  },
}

export default pedidoValidator