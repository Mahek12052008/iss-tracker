import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocatorScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='IssLocation' component={IssLocatorScreen} />
        <Stack.Screen name='Meteors' component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
