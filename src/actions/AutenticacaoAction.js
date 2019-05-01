import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
import {SET_NOME, 
        SET_EMAIL, 
        SET_SENHA, 
        CADASTRAR_USUARIO_SUCESSO, 
        CADASTRAR_USUARIO_ERRO, 
        LOGAR_USUARIO_SUCESSO, 
        LOGAR_USUARIO_ERRO } from './types';

export const setNome = (novoNome) => (
    {
        type: SET_NOME,
        payload: novoNome
    }
)

export const setEmail = (novoEmail) => (
    {
        type: SET_EMAIL,
        payload: novoEmail
    }
)

export const setSenha = (novaSenha) => (
    {
        type: SET_SENHA,
        payload: novaSenha
    }
)

export const cadastrarUsuario = (usuario) => {
    return dispatch => {
         firebase.auth()
            .createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then(usuarioCriado => {
                let emailB64 = b64.encode(usuario.email);
                firebase.database()
                        .ref(`/contatos/${emailB64}`)
                        .push({nome: usuario.nome})
                        .then(value => dispatch({
                                            type: CADASTRAR_USUARIO_SUCESSO,
                                            payload: usuario
                                       })
                        )

                Actions.cadastroSucesso();
            })
            .catch(erro => dispatch({
                type: CADASTRAR_USUARIO_ERRO,
                payload: erro.message
            }));
    }
}

export const logarUsuario = (usuario) =>{
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(usuario.email, usuario.senha)
            .then(value => {
                dispatch({
                    type: LOGAR_USUARIO_SUCESSO,
                    payload: usuario
                })

                Actions.home();
            })
            .catch(erro => dispatch({
                type: LOGAR_USUARIO_ERRO,
                payload: erro.message
            })) 
    }
}