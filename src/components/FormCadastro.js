import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Image,
    Text,
    ActivityIndicator
} from 'react-native';

import {connect} from 'react-redux';

import {setNome, setEmail, setSenha, cadastrarUsuario} from '../actions/AutenticacaoAction'

import Usuario from '../models/Usuario'

const imgBackground = require('../imgs/bg.png');

class FormCadastro extends Component {
    constructor(props){
        super(props);
    }

    _cadastrarUsuario(){
        const {nome, email, senha} = this.props;
        const novoUsuario = new Usuario(nome, email, senha);
        this.props.cadastrarUsuario(novoUsuario);
    }

    _renderBtnCadastrar(){
        if(this.props.loadingAutenticacao){
            return (<ActivityIndicator size='large' color='white'/>)
        }
        
        return (<Button
                            color='#115E54' 
                            title='Cadastrar' 
                            onPress={() => this._cadastrarUsuario()}/>);
    }

    render(){
        return (
            <Image style={{flex: 1, width: null}} source={imgBackground}>
                <View style={styles.container}>
                    <View style={styles.camposFormulario}>
                        <TextInput 
                            style={styles.txtInput} 
                            placeholder='Nome' 
                            value={this.props.nome}
                            placeholderTextColor = '#BCBDBD'
                            underlineColorAndroid='#BCBDBD'
                            onChangeText={(nome) => this.props.setNome(nome)}/>

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
                            onChangeText={(senha) => this.props.setSenha(senha)}/>
                    </View>
                    <View style={{flex: 1}} >
                        <Text style={styles.msgErro}>{this.props.mensagemErro}</Text>
                    </View>
                    <View style={styles.containerBotao}>
                        {this._renderBtnCadastrar()}
                    </View>
                </View>
            </Image>
        );
    }
}


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
    },
    msgErro:{
        color: 'red'
    }
});

const mapStateToProps = state =>(
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        mensagemErro: state.AutenticacaoReducer.mensagemErro,
        loadingAutenticacao: state.AutenticacaoReducer.loadingAutenticacao
    }
)

const component = connect(mapStateToProps, {setNome, setEmail, setSenha, cadastrarUsuario})(FormCadastro);

export {component as FormCadastro};