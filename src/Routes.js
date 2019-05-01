import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {FormLogin, FormCadastro, CadastroSucesso} from './components';

export default () =>(
    <Router navigationBarStyle={styles.navigationBar} titleStyle={styles.navigationBarTitle} leftButtonIconStyle={styles.navigationBackIcon}>
        <Scene key="formLogin" component={FormLogin} title="Login"/>
        <Scene key="formCadastro" component={FormCadastro} title="Cadastro"/>
        <Scene key="cadastroSucesso" component={CadastroSucesso} title="Bem vindo(a)!!!" type="replace"/>
    </Router>
);

const styles = StyleSheet.create({
    navigationBar :{
        backgroundColor: '#115E54',
    },
    navigationBarTitle:{
        color:'#FFFFFF'   
    },
    navigationBackIcon: {
        tintColor:'#FFFFFF'
    }    
});