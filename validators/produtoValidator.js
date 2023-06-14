const produtoValidator = {
    produto: {
        required:'O campo é obrigatório',
    minLength:{
      value: 4,
      message: ' O mínimo 4 caracteres'
    },
    
    },
    preco:{
        required:'O campo é obrigatório',
        min:{
            value: 0,
            message: 'O mínimo é 1'
          },
          max:{
            value: 2000,
            message: ' O máximo é 2000'
          },
        
        },
       quantidade:{
          required:'O campo é obrigatório',
          min:{
              value: 1,
              message: 'O mínimo é 1 '
            },
          
          },
         descricao:{
            required:'O campo é obrigatório',
            minLength:{
                value: 6,
                message: 'O mínimo 6 caracteres'
              },
              maxLength:{
                value: 30,
                message: 'O Máximo é 30 caracteres'
              },
            
            },
            foto:{
              required:'O campo é obrigatório',
              minLength:{
                  value: 10,
                  message: 'O mínimo 10 caracteres'
                },
              
              }
        
}
export default produtoValidator