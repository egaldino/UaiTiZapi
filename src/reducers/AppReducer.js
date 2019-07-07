import {SET_ADD_CONTATO_EMAIL, ADD_CONTATO_SUCESSO, CONTATO_NAO_EXISTE} from '../actions/types';

const INITIAL_STATE = {
    emailNovoContato: '',
    mensagemErro: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_ADD_CONTATO_EMAIL: return {...state, emailNovoContato: action.payload};
        case ADD_CONTATO_SUCESSO: return {...state, mensagemErro: ''};
        case CONTATO_NAO_EXISTE: return {...state, mensagemErro: payload};
        default: return state
    }
}