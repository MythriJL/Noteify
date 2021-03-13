import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/home/index';
import Question from './screens/question/index'
import Upload from './screens/upload/index';
import Answer  from './screens/answer/index';

const Stack = createStackNavigator();
export default function App() {
  return (

    <>
     
    {/* this is a router, it helps in easy navigation */}
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
      {/* <Stack.Screen
          name="Home"
          component={Home}
        /> */}
        <Stack.Screen
          name="Upload"
          component={Upload}
        />

        <Stack.Screen
          name="Question"
          component={Question}
        />
        <Stack.Screen 
        name="Answer"
        component={Answer}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
