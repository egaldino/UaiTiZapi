import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const imgBackground = require('../imgs/bg.png');
const logo = require('../imgs/logo.png');

const CadastroSucesso = props =>(
    <Image style={{flex: 1, width: null}} source={imgBackground}>
        <View style={styles.container}>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color:'white', fontSize: 16}}>Seja bem vindo(a)!!</Text>
                <Image source={logo} />
            </View>
            <View style={{flex: 2}}>
                <Button title='Logar' onPress={()=> Actions.formLogin()}/>
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});

export {CadastroSucesso};