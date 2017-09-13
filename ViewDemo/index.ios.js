/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
         {/*<Text>其实我是存在的</Text>*/}
        <View style={styles.innerViewStyle}>
          <Text>我是里面的View</Text>
        </View>
        <View style={styles.innerViewStyle2}>
          <Text>我是里面下面的View</Text>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor:'red',
    width:300,
    height:100,
    // 从默认的竖向 变成横向了
    flexDirection:'row'
  },

  innerViewStyle:{
    backgroundColor:'green',
    width:100
  },
  innerViewStyle2:{
    backgroundColor:'yellow',
    width:100
  }
});

AppRegistry.registerComponent('ViewDemo', () => ViewDemo);
