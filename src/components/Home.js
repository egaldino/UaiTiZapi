import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Home extends Component {
    render(){
        return (
            <View style={{flex: 1, padding: 10, marginTop: 100}}>
                <Text>Tela Principal do App</Text>
            </View>
        )
    }
}

export {Home};