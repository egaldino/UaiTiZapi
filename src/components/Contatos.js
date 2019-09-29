import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import {escutarContatosUsuario} from '../actions/ListaContatosAction';
import _ from 'lodash';

class Contatos extends Component {
    componentWillMount(){
        this.props.escutarContatosUsuario();
        this._criaFonteDeDados(this.props.contatos);
    }
    
    componentWillReceiveProps(nextProps){
        this._criaFonteDeDados(nextProps.contatos);
    }

    _criaFonteDeDados(contatos){
        const dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.fonteDeDados = dataSource.cloneWithRows(contatos);
    }
    render(){
        return (
            <ListView 
                enableEmptySections
                dataSource={this.fonteDeDados} 
                renderRow={data => 
                <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                    <Text style={{fontSize: 25}}>{data.nome}</Text>
                    <Text style={{fontSize: 18}}>{data.email}</Text>
                </View>}/>
        );
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => ({...val, uid}))
    return {contatos};
}

const component = connect(mapStateToProps, {escutarContatosUsuario})(Contatos);
export {component as Contatos};