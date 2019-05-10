import {SET_ADD_CONTATO_EMAIL } from './types';

export const setEmail = (novoEmail) => (
    {
        type: SET_ADD_CONTATO_EMAIL,
        payload: novoEmail
    }
)
