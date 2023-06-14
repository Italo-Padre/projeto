const usuarioValidator = {
    nome: {
        required:'O campo é obrigatório',
    minLength:{
      value: 4,
      message: 'Minimo 4 caracteres'
    },
    
    },
    senha:{
        required:'O campo é obrigatório',
        minLength:{
            value: 6,
            message: 'Minimo 6 caracteres'
          },
        
        }
}
export default usuarioValidator