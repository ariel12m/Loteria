import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/src/screens/HomeScreen';
import DetailsScreen from './components/src/screens/DetailScreen';
import GameScreen from './components/src/screens/GameScreen';
import ResultScreen from './components/src/screens/ResultScreen';
import VictoryScreen from './components/src/screens/VictoryScreen';
import RewardScreen from './components/src/screens/RewardScreeen';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Game: undefined;
  Result: { isWinner: boolean, selectedNumber: string, winningNumber: string };
  Victory: undefined;
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Victory" component={VictoryScreen} />
        <Stack.Screen name="Reward" component={RewardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
