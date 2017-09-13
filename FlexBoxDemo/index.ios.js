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

/***第一个实例程序**/

export default class FlexBoxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={ {backgroundColor:'red',height:30} }>第1个</Text>
        <Text style={ {backgroundColor:'green',height:40} }>第2个</Text>
        <Text style={ {backgroundColor:'blue',height:50} }>第3个</Text>
        <Text style={ {backgroundColor:'yellow',height:60} }>第4个</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    // 修改主轴方向为 横向
    flexDirection:'row',
    // 上边距
    marginTop:25,
    // 默认是flex-start 从主轴起始点对齐
    // flex-end 终点对齐
    // center 居中对齐
    // space-between 两端对齐
    // space-around 平均分布在行里 两端保留一半的空间
    justifyContent:'flex-start',
    // 设置侧轴对齐
    alignItems:'center'
  },
});


/***第二个实例程序**/
export class FlexBoxDemo1 extends Component {
  render() {
    return (
        <View style={styles1.container}>
          <Text style={ {backgroundColor:'red',width:80} }>第1个</Text>
          <Text style={ {backgroundColor:'green',width:90} }>第2个</Text>
          <Text style={ {backgroundColor:'blue',width:100} }>第3个</Text>
          <Text style={ {backgroundColor:'cyan',width:110} }>第4个</Text>
        </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    marginTop:30,
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
    // 显示不下换一行 默认是no-wrap
    flexWrap:'wrap'
  }
    }

)


/***第三个实例程序**/
export class FlexBoxDemo2 extends Component {
  render() {
    return (
        <View style={styles2.container}>
          <Text style={ {backgroundColor:'red',flex:1,height:60,alignSelf:'flex-start'} }>第1个</Text>
          <Text style={ {backgroundColor:'green',flex:2,height:70,alignSelf:'flex-end'} }>第2个</Text>
          <Text style={ {backgroundColor:'blue',flex:2,height:80} }>第3个</Text>
          <Text style={ {backgroundColor:'cyan',flex:1,height:90} }>第4个</Text>
        </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    marginTop:30,
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
  }
})

/***第四个实例程序**/

// 引入
var Dimensions = require('Dimensions');

export class FlexBoxDemo3 extends Component {
  render() {
    return (
        <View style={styles3.outViewStyle}>
          <Text>当期那屏幕的宽度:{Dimensions.get('window').width}</Text>
          <Text>当期那屏幕的高度:{Dimensions.get('window').height}</Text>
          <Text>当期那屏幕的分辨率:{Dimensions.get('window').scale}</Text>
        </View>
    );
  }
}

const styles3 = StyleSheet.create({
  outViewStyle:{
    // 主轴居中
    justifyContent:'center',
    // 侧轴居中
    alignItems:'center',
    // 占满整个屏幕
    flex:1,
    backgroundColor:'cyan'
  }

})
AppRegistry.registerComponent('FlexBoxDemo', () => FlexBoxDemo3);
