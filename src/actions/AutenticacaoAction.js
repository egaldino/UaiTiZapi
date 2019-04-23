import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

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
                dispatch({
                    type: 'cadastrar-usuario-sucesso',
                    payload: usuario
                })

                Actions.cadastroSucesso();
            })
            .catch(erro => dispatch({
                type: 'cadastrar-usuario-erro',
                payload: erro
            }));
    }
}