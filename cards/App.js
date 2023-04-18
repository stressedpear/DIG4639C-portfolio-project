import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

function HomeScreen ({route, navigation}) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name='Add' component={AddScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator()
  const studyCards = [
    {
      "Title": "Spanish",
      "Cards": [
        {
          "term": "Yo",
          "definition" : "I"
        },
        {
          "term" : "Tu",
          "definiton" : "You"
        }
      ]
    },
    {
      "Title": "emotions",
      "Cards": [
        {
          "term": "happy",
          "definition" : "feeling or showing pleasure or contentment"
        },
        {
          "term" : "sad",
          "definiton" : "feeling or showing sorrow"
        }
      ]
    }
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} initialParams={{studyCards: studyCards}}></Stack.Screen>
        <Stack.Screen name='Study' component={StudyScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
