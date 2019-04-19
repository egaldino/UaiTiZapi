import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';

import {connect} from 'react-redux';

import {setNome, setEmail, setSenha} from '../actions/AutenticacaoAction'

const imgBackground = require('../imgs/bg.png');

const component = props => (
    <Image style={{flex: 1, width: null}} source={imgBackground}>
        <View style={styles.container}>
            <View style={styles.camposFormulario}>
                <TextInput 
                    style={styles.txtInput} 
                    placeholder='Nome' 
                    value={props.nome}
                    placeholderTextColor = '#BCBDBD'
                    underlineColorAndroid='#BCBDBD'
                    onChangeText={(nome) => props.setNome(nome)}/>

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
                    onChangeText={(senha) => props.setSenha(senha)}/>
            </View>
            <View style={styles.containerBotao}>
                <Button
                    color='#115E54' 
                    title='Cadastrar' 
                    onPress={() => false}/>
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
    camposFormulario:{
        flex: 4,
        justifyContent: 'center'
    },
    txtInput:{
        fontSize: 20,
        height: 45,
        color : "white"
    },
    containerBotao: {
        flex: 1
    }
});

const mapStateToProps = state =>(
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

const FormCadastro = connect(mapStateToProps, {setNome, setEmail, setSenha})(component);

export {FormCadastro};