import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {TabBarMenu, Contatos, Mensagens} from './'

class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Mensagens' },
      { key: '2', title: 'Contatos' },
    ],
  };

  _handleChangeTab = index => this.setState({index});

  _renderHeader = props => <TabBarMenu {...props}/>;

  render() {
    return (
      <TabViewAnimated
        style={styles.scene}
        navigationState={this.state}
        renderScene={SceneMap({
          '1': Mensagens,
          '2': Contatos,
        })}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export {Home};