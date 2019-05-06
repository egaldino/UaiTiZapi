import React from 'react';
import {View, Text} from 'react-native';
import {TabBar} from 'react-native-tab-view'; 

const TabBarMenu = props => (
    <View style={{marginTop: 50, elevation: 4, marginBottom: 12}}>
        <TabBar {...props} style={{backgroundColor: '#115E54', elevation: 4, marginTop: 0}}/>
    </View>
);

export {TabBarMenu};