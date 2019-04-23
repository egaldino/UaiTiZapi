const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    mensagemErro: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'set-nome'){
        return {...state, nome: action.payload};
    }

    if(action.type == 'set-email'){
        return {...state, email: action.payload};
    }

    if(action.type == 'set-senha'){
        return {...state, senha: action.payload};
    }

    if(action.type == 'cadastrar-usuario-sucesso'){
       return {...state, mensagemErro: '', nome: '', senha: ''};
    }

    if(action.type == 'cadastrar-usuario-erro'){
        return {...state, mensagemErro: action.payload.message};
    }

    return state;
}