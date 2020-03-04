import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Components/Login';
import Tatasky from './src/Components/Tatasky';
import {Button} from 'react-native'

import Safearea from './src/Components/Safeareea';

import * as React from 'react';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      
      <Stack.Screen name="Tatasky" component={Tatasky}
      options={{
        
    }}
      
      />
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