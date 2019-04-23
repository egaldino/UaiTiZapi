import React from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {FormLogin, FormCadastro, CadastroSucesso} from './components';

export default () =>(
    <Router>
        <Scene key="formLogin" component={FormLogin} title="Login"/>
        <Scene key="formCadastro" component={FormCadastro} title="Cadastro"/>
        <Scene key="cadastroSucesso" component={CadastroSucesso} title="Bem vindo(a)!!!" type="replace"/>
    </Router>
);