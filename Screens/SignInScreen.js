import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Home from './Home';

const SignInScreen = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const {email, password} = credentials;
  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onLoginPress = () => {
    if (!email) {
      Alert.alert('No Email-Id Found', 'Please Enter Email-Id');
    } else if (!password) {
      Alert.alert('No Password Entered', 'Please Enter Password');
    } else {
      alert(JSON.stringify(credentials));
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../logo_quiz.jpg')} />

      <TextInput
        style={styles.inputBox}
        keyboardType="email-address"
        placeholder="Email-Id"
        placeholderTextColor="#696969"
        value={email}
        onChangeText={(text) => handleOnChange('email', text)}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor="#696969"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => handleOnChange('password', text)}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => onLoginPress()}>
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
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#460C3C',
  },
  loginButton: {
    padding: 5,
    backgroundColor: '#daa520',
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
    width: 250,
    height: 200,
  },
  signUp: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  signUpText: {
    fontSize: 15,
    color: '#191970',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
