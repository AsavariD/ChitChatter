import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import Home from './Screens/Home';

const AuthStack = createStackNavigator();

const Navig = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Register Your Account"
          component={SignUpScreen}
        />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navig;
