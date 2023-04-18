
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator()

function HomeScreen ({route, navigation}) {
  const { studyCards } = route.params
  return (
    <SafeAreaProvider>
      <Header leftComponent={{
        text: 'Cards',
        color: '#fff',
      }}></Header>
      <Text>Your Cards: </Text>
    </SafeAreaProvider>
  )
}

export default function App() {
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
        <Stack.Screen name='Cards' component={HomeScreen} initialParams={{studyCards: studyCards}}></Stack.Screen>
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
