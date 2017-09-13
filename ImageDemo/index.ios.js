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
  Image,
  View
} from 'react-native';

// 导入json数据
var transData = require('./Transform.json');

var Dimensions = require('Dimensions');

var {width} = Dimensions.get('window');


var cols = 3;
var boxW = 100;
var vMargin = (width-cols*boxW)/(cols+1);
var hMargin = 25;

export default class ImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*返回9个包*/}
        {this.renderAllTrans()}
      </View>
    );
  }

  // 返回所有的交通工具
  renderAllTrans(){
    // 定义一个数组装所有的子组件
      var allTrans = [];
    // 遍历 Json 数据
      for (var i = 0;i<transData.data.length;i++){
          // 取出单独的数据对象
          var transTool = transData.data[i];
          // 直接装入数组
          allTrans.push(
              <View key = {i} style={styles.outViewStyle}>
                  <Image source={{uri:transTool.icon}} style={styles.imageStyle}/>
                  <Text style={styles.mainTitleStyle}>
                      {transTool.title}
                  </Text>
              </View>
          );
      }
      // 返回数组
      return allTrans;
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap'
  },

  outViewStyle:{
    backgroundColor:'gray',
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin
  },

  imageStyle:{
    width:80,
    height:80,
    resizeMode:Image.resizeMode.center
  },

  mainTitleStyle:{
    marginTop:3
  }
});

AppRegistry.registerComponent('ImageDemo', () => ImageDemo);
