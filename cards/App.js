
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button } from '@rneui/base';
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function AddScreen ({}) {
  return(
    <View>
      <Text>add </Text>
    </View>
  )
}

function HomeScreen ({route, navigation}) {
  const { studyCards } = route.params
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <Button
       title={item.title}
       titleStyle={{color: 'black'}} 
       buttonStyle={styles.button}
      ></Button>
    </View>
  )
  return (
    <View>
      <Text>Your Cards:</Text>
      <FlatList 
      data={studyCards}
      renderItem={Item}
      numColumns={2}
      />
    </View>
    
  )
}

export default function App() {
  const studyCards = [
  {
    "title": "Spanish",
      "cards": [
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
      "title": "Emotions",
      "cards": [
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
      <Tab.Navigator initialRouteName='Cards' screenOptions={{ tabBarActiveTintColor: '#FD8C24'}}>
          <Tab.Screen
            name="Cards"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            initialParams={{studyCards: studyCards}}
          />
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="card-plus" color={color} size={size} />
              ),
            }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10
  },
  button: {
    backgroundColor: "#FFC086",
    width: 164,
    height: 164
  }
});
