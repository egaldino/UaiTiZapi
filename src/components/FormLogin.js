import React, {Component} from 'react';
import {
    StyleSheet,
    View, 
    Text, 
    Button,
    TextInput,
    TouchableHighlight,
    Image,
    ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {setEmail, setSenha, logarUsuario} from '../actions/AutenticacaoAction';

import Usuario from '../models/Usuario';

const imgBackground = require('../imgs/bg.png');

class FormLogin extends Component {
    constructor(props){
        super(props);
    }

    _logarUsuario(){
        const {email, senha} = this.props;
        const usuario = new Usuario(null, email, senha);
        this.props.logarUsuario(usuario);
    }

    _renderBtnAcessar(){
        if(this.props.loadingAutenticacao){
            return (<ActivityIndicator size='large' color='white'/>)
        }
        
        return (
            <Button
                            onPress={() => this._logarUsuario()}
                            color='#115E54'
                            title="Acessar"
                            accessibilityLabel="Acessar"/>
        )
    }

    render(){
        return (
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
                            value={this.props.email}
                            placeholderTextColor = '#BCBDBD'
                            underlineColorAndroid='#BCBDBD'
                            onChangeText={(email) => this.props.setEmail(email)}/>

                        <TextInput
                            style={styles.txtInput} 
                            placeholder='Senha' 
                            textContentType='password'
                            autoComplete='password'
                            secureTextEntry
                            value={this.props.senha}
                            placeholderTextColor = '#BCBDBD'
                            underlineColorAndroid='#BCBDBD'
                            onChangeText={(senha) => this.props.setSenha(senha)} />
                        
                        <TouchableHighlight opacity={0.9} underlayColor='#115E54' onPress={()=> Actions.formCadastro()}>
                            <Text style={styles.txtCadastrar}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex: 1}} >
                        <Text style={styles.msgErro}>{this.props.mensagemErroLogin}</Text>
                    </View>
                    <View style={styles.containerBotao}>
                        {this._renderBtnAcessar()}
                    </View>
                </View>
            </Image>
            );
    }
}

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
    },
    msgErro:{
        color: 'red'
    }
});

const mapStateToProps = state =>(
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        mensagemErroLogin: state.AutenticacaoReducer.mensagemErroLogin,
        loadingAutenticacao: state.AutenticacaoReducer.loadingAutenticacao
    }
)

const component = connect(mapStateToProps, {setEmail, setSenha, logarUsuario})(FormLogin);

export {component as FormLogin};