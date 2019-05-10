import {combineReducers} from 'redux';

import AutenticacaoReducer from './AutenticacaoReducer'
import AppReducer from './AppReducer'

export default combineReducers({
    AutenticacaoReducer,
    AppReducer
});