import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocation from './screens/IssLocation';
import Meteors from './screens/Meteors'

export default class App extends React.Component{
  render(){
    return(
      <View>
     <Meteors />
      </View>
    );
  }
}