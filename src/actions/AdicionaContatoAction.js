import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {SET_ADD_CONTATO_EMAIL, ADD_CONTATO_SUCESSO, ADD_CONTATO_ERRO } from './types';

export const setEmail = (novoEmail) => (
    {
        type: SET_ADD_CONTATO_EMAIL,
        payload: novoEmail
    }
)

export const adicionaContato = contatoEmail => {
    return dispatch => {
        const emailBase64 = b64.encode(contatoEmail);
        _verificaSeContatoExiste(emailBase64).then(contato => {
            if(contato){
                const {currentUser} = firebase.auth();
                const emailAutenticadoBase64 = b64.encode(currentUser.email);

                firebase.database().ref(`/usuario_contatos/${emailAutenticadoBase64}`).push({
                    email: contatoEmail, nome: contato.nome
                })
                .then(() => adicionaContatoSucesso(dispatch, 'Contato adicionado com sucesso'))
                .catch(erro =>  adicionaContatoErro(dispatch, erro.message));
                
            } else {
                adicionaContatoErro(dispatch, 'Contato não existe')
            }
        });
    }
}

export const limpaMensagemSucesso = () =>{ 
    return dispatch => {
        dispatch({
            type: ADD_CONTATO_SUCESSO,
            payload: null
        }) 
    }
}

const _verificaSeContatoExiste = email => firebase.database()
                                                .ref(`/contatos/${email}`)
                                                .once('value')
                                                .then(snapshot => {
                                                    if(snapshot.val()){
                                                        return _.first(_.values(snapshot.val()));
                                                    }
                                                    return null;
                                                })
                                                .catch(error => console.log(error));

const adicionaContatoSucesso = (dispatch, msg) => {
    dispatch({
        type: ADD_CONTATO_SUCESSO,
        payload: msg
    }) 
}

const adicionaContatoErro = (dispatch, msg) => 
dispatch({
    type: ADD_CONTATO_ERRO,
    payload: msg
})
