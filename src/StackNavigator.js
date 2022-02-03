import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const StackNavigator = () => {
  return (
      <Stack.Navigator>
          {user ? (
              //To load if User is signed in
              <Stack.Screen name="Main" component={}>

              </Stack.Screen>
          ) : (
              <Stack.Screen name="LogIn" component={}>

              </Stack.Screen>
          )}
      </Stack.Navigator>
  )
}

export default StackNavigator;
