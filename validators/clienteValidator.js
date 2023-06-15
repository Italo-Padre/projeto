const clienteValidator = {
    nome: {
        required:'O campo é obrigatório',
    minLength:{
      value: 4,
      message: ' O mínimo é 4 caracteres'
    },
    maxLength:{
      value: 50,
      message: ' O máximo é 50 caracteres'
    },
    
    },
    email: {
      required:'O campo é obrigatório',
  minLength:{
    value: 4,
    message: ' O mínimo é 4 caracteres'
  },
        },
           rua:{
                required:'O campo é obrigatório',
                minLength:{
                    value: 1,
                    message: 'O mínimo é 1 caracteres '
                  },
                  maxLength:{
                    value: 20,
                    message: 'O máximo é 20 caracteres '
                  },
                  
                
                },
                cidade:{
                    required:'O campo é obrigatório',
                    minLength:{
                        value: 3,
                        message: 'O mínimo  é 3 caracteres '
                      },
                      max:{
                        value: 15,
                        message: 'O máximo é 15 caracteres '
                      },
                      
                    
                    },
                   bairro:{
                        required:'O campo é obrigatório',
                        minLength:{
                            value: 2,
                            message: 'O mínimo  é 2 caracteteres '
                          },
                          max:{
                            value: 20,
                            message: 'O máximo é 20 caracteres '
                          },
                          
                        
                        },
                        cep:{
                            required:'O campo é obrigatório',
                            minLength:{
                                value: 1,
                                message: 'O mínimo  é 1 '
                              },
                              maxLength:{
                                value: 2000,
                                message: 'O máximo é 2000 '
                              },
                              
                            
                            },
                           estado:{
                                required:'O campo é obrigatório',
                                min:{
                                    value: 1,
                                    message: 'O mínimo  é 1 '
                                  },
                                  max:{
                                    value: 2000,
                                    message: 'O máximo é 2000 '
                                  },
                                  
                                },
    }

export default clienteValidator