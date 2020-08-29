import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Home from './Home';

const SignInScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../logo_quiz.jpg')} />

      <TextInput
        style={styles.inputBox}
        placeholder="Email-Id"
        placeholderTextColor="#696969"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#696969"
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>SignIn</Text>
      </TouchableOpacity>
      <View style={styles.signUp}>
        <Text style={{fontSize: 15}}>Don't have an account yet? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register Your Account')}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#460C3C',
  },
  loginButton: {
    padding: 5,
    backgroundColor: '#d8bfd8',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 25,
    width: 200,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#02081E',
  },
  inputBox: {
    borderRadius: 25,
    backgroundColor: '#dcdcdc',
    width: 300,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  signUp: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  signUpText: {
    fontSize: 15,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
