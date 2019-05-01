import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

export const setNome = (novoNome) => (
    {
        type: 'set-nome',
        payload: novoNome
    }
)

export const setEmail = (novoEmail) => (
    {
        type: 'set-email',
        payload: novoEmail
    }
)

export const setSenha = (novaSenha) => (
    {
        type: 'set-senha',
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
                                            type: 'cadastrar-usuario-sucesso',
                                            payload: usuario
                                       })
                        )

                Actions.cadastroSucesso();
            })
            .catch(erro => dispatch({
                type: 'cadastrar-usuario-erro',
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
                    type: 'logar-usuario-sucesso',
                    payload: usuario
                })

                Actions.cadastroSucesso();
            })
            .catch(erro => dispatch({
                type: 'logar-usuario-erro',
                payload: erro.message
            })) 
    }
}