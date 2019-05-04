import {SET_NOME, 
        SET_EMAIL, 
        SET_SENHA, 
        CADASTRAR_USUARIO_SUCESSO, 
        CADASTRAR_USUARIO_ERRO, 
        LOGAR_USUARIO_SUCESSO, 
        LOGAR_USUARIO_ERRO,
        EXIBIR_LOADING_AUTENTICACAO } from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    mensagemErro: '',
    usuarioLogado: null,
    mensagemErroLogin: '',
    loadingAutenticacao: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_NOME: return {...state, nome: action.payload};
        case SET_EMAIL: return {...state, email: action.payload};
        case SET_SENHA: return {...state, senha: action.payload};
        case CADASTRAR_USUARIO_SUCESSO: return {...state, mensagemErro: '',  loadingAutenticacao: false, nome: '', senha: ''};
        case CADASTRAR_USUARIO_ERRO: return {...state, mensagemErro: action.payload, loadingAutenticacao: false};
        case LOGAR_USUARIO_SUCESSO: return {...state, mensagemErroLogin: '', loadingAutenticacao: false, usuarioLogado: action.payload};
        case LOGAR_USUARIO_ERRO: return {...state, mensagemErroLogin: action.payload, loadingAutenticacao: false,  usuarioLogado: null};
        case EXIBIR_LOADING_AUTENTICACAO: return {...state, loadingAutenticacao: true};
        default: return state
    }
}