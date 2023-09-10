import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='추가할 일정을 입력하시오'
      />
      <Button title='등록' />  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const Timeviewer = () => {
  const todaytime = () => { 
  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const week = ['일','월','화','수','목','금','토'];
  let dayweek = week[now.getDay()];

  return todayYear+'.'+todayMonth+'.'+todayDate+' '+dayweek+' '+'일정';
    }
  const thetime = todaytime().slice(0,9)+todaytime().slice(9,12)+todaytime().slice(12,19);
  
  return (
    <View>
      <Text>{thetime}</Text>
    </View>
  );

}

export default class Main_screen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text><Timeviewer /></Text>
        <TextInputExample />
      </View>
    );
  }
}