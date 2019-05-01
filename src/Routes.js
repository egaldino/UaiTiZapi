import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {FormLogin, FormCadastro, CadastroSucesso, Home} from './components';

export default () =>(
    <Router navigationBarStyle={styles.navigationBar} titleStyle={styles.navigationBarTitle} leftButtonIconStyle={styles.navigationBackIcon}>
        <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar/>
        <Scene key="formCadastro" component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key="cadastroSucesso" component={CadastroSucesso} title="Bem vindo(a)!!!" type="reset" hideNavBar/>
        <Scene key="home" component={Home} title="Home" type="reset" hideNavBar/>
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