import React from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {FormLogin, FormCadastro} from './components';

export default () =>(
    <Router>
        <Scene key="formLogin" component={FormLogin} title="Login"/>
        <Scene key="formCadastro" component={FormCadastro} title="Cadastro"/>
    </Router>
);