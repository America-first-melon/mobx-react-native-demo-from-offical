/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 官网demo-->https://github.com/mobxjs/mobx-react-boilerplate
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import NewApp from './app';
import AppState from './appState';

const appState = new AppState();

import {action} from 'mobx';

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

export default class Proj extends Component {
  render() {
    return (
      <NewApp appState={appState}/>
    );
  }
}


AppRegistry.registerComponent('Proj', () => Proj);