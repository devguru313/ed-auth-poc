import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class GamePlayer extends Component {
  render() {
    return (
        <WebView
        source={{uri: 'http://192.168.0.39:5500/'}}
        style={{marginTop: 20}}
      />
    );
  }
}