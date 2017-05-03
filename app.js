/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {observer} from 'mobx-react';

class App extends Component {
    render() {
        return (
        <View>
            <TouchableOpacity onPress={()=>{this.props.appState.resetTimer()}}>
                <Text>
                    时间：{this.props.appState.timer}
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const NewApp = observer(App);

export default NewApp;




