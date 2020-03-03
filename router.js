import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Displaypass from './src/Components/Displaypass';
import Tatasky from './src/Components/Tatasky';

import Safearea from './src/Components/Safeareea';

import * as React from 'react';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Display" component={Displaypass} />
      <Stack.Screen name="Tatasky" component={Tatasky} />
      <Stack.Screen name="Safearea" component={Safearea} />
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;