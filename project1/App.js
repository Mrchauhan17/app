import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/Homepage';
import RegisterPage from './src/screens/Registerpage';
import LoginPage from './src/screens/Loginpage';
import { Transition } from 'react-native-reanimated';

const Stack = createStackNavigator();
const fadeTransition = ({ current, next }) => {
  const transition = {
    type: 'fade',
    duration: 300, // Adjust the duration to control the fade animation speed
  };
  return <Transition.Sequence animation={transition} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: fadeTransition,
            close: fadeTransition,
          },
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
