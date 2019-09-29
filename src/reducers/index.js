import {combineReducers} from 'redux';

import AutenticacaoReducer from './AutenticacaoReducer'
import AppReducer from './AppReducer'
import ListaContatosReducer from './ListaContatosReducer'

export default combineReducers({
    AutenticacaoReducer,
    ListaContatosReducer,
    AppReducer
});