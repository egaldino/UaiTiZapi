import {SET_ADD_CONTATO_EMAIL} from '../actions/types';

const INITIAL_STATE = {
    emailNovoContato: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_ADD_CONTATO_EMAIL: return {...state, emailNovoContato: action.payload};
        default: return state
    }
}