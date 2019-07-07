import firebase from 'firebase';
import b64 from 'base-64';

import {SET_ADD_CONTATO_EMAIL, ADD_CONTATO_ERRO } from './types';

export const setEmail = (novoEmail) => (
    {
        type: SET_ADD_CONTATO_EMAIL,
        payload: novoEmail
    }
)

export const adicionaContato = contatoEmail => {
    return dispatch => {
        let emailBase64 = b64.encode(contatoEmail);
        _verificaSeContatoExiste(emailBase64).then(contatoExiste => {
            if(contatoExiste){
                dispatch({
                    type: ADD_CONTATO_SUCESSO
                })
            } else {
                dispatch({
                    type: ADD_CONTATO_ERRO,
                    payload: 'Contato não existe'
                }) 
            }
        });
    }
}

const _verificaSeContatoExiste = email => firebase.database()
                                                .ref(`/contatos/${email}`)
                                                .once('value')
                                                .then(snapshot => {
                                                    if(snapshot.val()){
                                                        return true;
                                                    }
                                                    return false;
                                                });
