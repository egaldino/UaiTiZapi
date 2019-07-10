import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import {setEmail, adicionaContato} from '../actions/AdicionaContatoAction'

const imgBackground = require('../imgs/bg.png');

class AdicionarContato extends Component {
    constructor(props){
        super(props);
    }

    _renderBtnCadastrar(){        
        return (<Button
                            color='#115E54' 
                            title='Adicionar' 
                            onPress={() => this.props.adicionaContato(this.props.email)}/>);
    }

    render(){
        return (
            <Image style={{flex: 1, width: null}} source={imgBackground}>
                <View style={styles.container}>
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
        email: state.AppReducer.emailNovoContato,
        mensagemErro: state.AppReducer.mensagemErro
    }
)

const component = connect(mapStateToProps, {setEmail, adicionaContato})(AdicionarContato);
export {component as AdicionarContato};