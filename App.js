import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Login from './Login';
import Main_screen from './Main_screen';
import Auth from './Auth';

export default class App extends Component {
  render() {
    return (
      <Auth />
      );
  }
}