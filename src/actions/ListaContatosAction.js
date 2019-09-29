import firebase from 'firebase';
import b64 from 'base-64';
import {LISTA_CONTATOS_USUARIO} from './types';

export const escutarContatosUsuario = () => {
    const {currentUser} = firebase.auth();

    return dispatch => {

        const emailUsuarioBase64 = b64.encode(currentUser.email);
        firebase.database().ref(`/usuario_contatos/${emailUsuarioBase64}`)
                .on("value", snapshot => {
                    dispatch({
                        type: LISTA_CONTATOS_USUARIO,
                        payload: snapshot.val()
                    });
                });
    }
}
