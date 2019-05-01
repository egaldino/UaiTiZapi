const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    mensagemErro: '',
    usuarioLogado: null,
    mensagemErroLogin: ''
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
        return {...state, mensagemErro: action.payload};
    }

    if(action.type == 'logar-usuario-sucesso'){
       return {...state, mensagemErroLogin: '', usuarioLogado: action.payload};
    }

    if(action.type == 'logar-usuario-erro'){
       return {...state, mensagemErroLogin: action.payload, usuarioLogado: null};
    }

    return state;
}