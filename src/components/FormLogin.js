import React from 'react';
import {
    StyleSheet,
    View, 
    Text, 
    Button,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {setEmail, setSenha} from '../actions/AutenticacaoAction'

const imgBackground = require('../imgs/bg.png');

const component = props => (
<Image style={{flex: 1, width: null}} source={imgBackground}>
    <View style={styles.container}>
        <View style={styles.topo}>
            <Text style={styles.titulo}>UaiTiZapi</Text>
        </View>
        
        <View style={styles.camposFormulario}>
            <TextInput 
                style={styles.txtInput}
                placeholder='E-mail' 
                textContentType='emailAddress'
                autoComplete='email'
                keyboardType='email-address'
                value={props.email}
                placeholderTextColor = '#BCBDBD'
                underlineColorAndroid='#BCBDBD'
                onChangeText={(email) => props.setEmail(email)}/>

            <TextInput
                style={styles.txtInput} 
                placeholder='Senha' 
                textContentType='password'
                autoComplete='password'
                secureTextEntry
                value={props.senha}
                placeholderTextColor = '#BCBDBD'
                underlineColorAndroid='#BCBDBD'
                onChangeText={(senha) => props.setSenha(senha)} />
            
            <TouchableHighlight opacity={0.9} underlayColor='#115E54' onPress={()=> Actions.formCadastro()}>
                <Text style={styles.txtCadastrar}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
        </View>

        <View style={styles.containerBotao}>
            <Button
                onPress={() => false}
                color='#115E54'
                title="Acessar"
                accessibilityLabel="Acessar"/>
        </View>
    </View>
</Image>
);

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 10
    },
    topo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    titulo: {
        fontSize: 25,
        color: "white"
    },
    camposFormulario:{
        flex: 2
    },
    txtInput:{
        fontSize: 20,
        height: 45,
        color : "white"
    },
    txtCadastrar:{
        marginTop: 10,
        fontSize: 15,
        color : "white"
    },
    containerBotao: {
        flex: 2
    }
});

const mapStateToProps = state =>(
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

const FormLogin = connect(mapStateToProps, {setEmail, setSenha})(component);

export {FormLogin};