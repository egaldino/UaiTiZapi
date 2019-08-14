import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {FormLogin, FormCadastro, CadastroSucesso, Home, AdicionarContato} from './components';
import {limpaMensagemSucesso} from './actions/AdicionaContatoAction';


const Routes = props =>(
    <Router navigationBarStyle={styles.navigationBar} 
            titleStyle={styles.navigationBarTitle} 
            leftButtonIconStyle={styles.navigationBackIcon}>

        <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar/>
        <Scene key="formCadastro" component={FormCadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key="cadastroSucesso" component={CadastroSucesso} title="Bem vindo(a)!!!" type="reset" hideNavBar/>
        <Scene navigationBarStyle={styles.navigationBarHome} 
                titleStyle={styles.navigationBarTitleHome} 
                key="home" component={Home} 
                title="UaiTiZapi" 
                type="reset" 
                hideNavBar={false} 
                renderRightButton={ ()=> <IconesHomeBar limpaMensagemSucesso={props.limpaMensagemSucesso}/>}
                />
        <Scene key="adicionarContato" component={AdicionarContato} title="Adicionar Contato" hideNavBar={false}/>
    </Router>
);

const IconesHomeBar = props => (
    <View style={{width: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableHighlight onPress={() => irParaAdicionarContato(props.limpaMensagemSucesso)} underlayColor='#114D44'>
            <Image source={require('./imgs/adicionar-contato.png')}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => false} underlayColor='#114D44'>
            <Text style={styles.homeSairText}>Sair</Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    navigationBar :{
        backgroundColor: '#115E54',
    },
    navigationBarHome :{
        backgroundColor: '#115D54',
        borderBottomWidth: 0,
    },
    navigationBarTitle:{
        color:'#FFFFFF'   
    },
    navigationBarTitleHome:{
        color:'#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: -15
    },
    navigationBackIcon: {
        tintColor:'#FFFFFF'
    },
    homeSairText:{
        color:'#FFF',
        fontWeight: 'bold'
    }  
});

function irParaAdicionarContato(callbefore) {
    callbefore();
    return Actions.adicionarContato();
}

const component = connect(null, {limpaMensagemSucesso})(Routes);
export default component;