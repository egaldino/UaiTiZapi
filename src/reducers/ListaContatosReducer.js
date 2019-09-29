import {LISTA_CONTATOS_USUARIO} from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LISTA_CONTATOS_USUARIO: return action.payload;
    }
    return state;
}