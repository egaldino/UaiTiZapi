import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Mensagens' },
      { key: '2', title: 'Contatos' },
    ],
  };

  _handleChangeTab = index => this.setState({index});

  _renderHeader = props => <TabBar {...props}/>;

  render() {
    return (
      <TabViewAnimated
        style={styles.scene}
        navigationState={this.state}
        renderScene={SceneMap({
          '1': FirstRoute,
          '2': SecondRoute,
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