const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
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
    return state;
}