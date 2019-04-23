import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Routes from './Routes';
import reducers from './reducers';

const firebase = require('firebase');


class App extends Component { 
    constructor(props){
        super(props);
    }

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyB5GsprAGK8KhYHWtyCpLz6ceGTJbTZtz0",
            authDomain: "uaitizapi-a4328.firebaseapp.com",
            databaseURL: "https://uaitizapi-a4328.firebaseio.com",
            projectId: "uaitizapi-a4328",
            storageBucket: "uaitizapi-a4328.appspot.com",
            messagingSenderId: "897152288030"
        };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;