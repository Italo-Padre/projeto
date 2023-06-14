const clienteValidator = {
    nome: {
        required:'O campo é obrigatório',
    min:{
      value: 4,
      message: 'O mínimo é  1'
    },
    max:{
      value: 50,
      message: 'O máximo é  50'
    },
    
    },
    email: {
      required:'O campo é obrigatório',
  minLength:{
    value: 4,
    message: ' O mínimo 4 caracteres'
  },
        },
        senha:{
            required:'O campo é obrigatório',
            minh:{
                value: 1,
                message: 'O mínimo é 1 '
              },
            
            },
           rua:{
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
                cidade:{
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
                   bairro:{
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
                        cep:{
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