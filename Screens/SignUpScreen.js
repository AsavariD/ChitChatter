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
import signUpRequest from '../src/network/signup';
import AddUser from '../src/network/user';

const SignUpScreen = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const {email, username, password, confirm} = credentials;
  const handleOnChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSignUpPress = () => {
    if (!username) {
      Alert.alert('No Username Entered', 'Please Enter Username');
    } else if (!password) {
      Alert.alert('No Password Entered', 'Please Enter Password');
    } else if (!email) {
      Alert.alert('No Email-Id Entered', 'Please Enter Email-Id');
    } else if (!confirm) {
      Alert.alert('No Password Confirmed', 'Please Confirm Password');
    } else if (password !== confirm) {
      Alert.alert('Password Did Not Match', 'Please Re-Enter Correct Password');
    } else {
      alert(JSON.stringify(credentials));
    }
    signUpRequest(email, password)
      .then(() => {
        let profileImg = '';
        AddUser(name, email, uid, profileImg)
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../logo_quiz.jpg')} />

      <TextInput
        style={styles.inputBox}
        placeholder="Username"
        placeholderTextColor="#696969"
        value={username}
        onChangeText={(text) => handleOnChange('username', text)}
      />
      <TextInput
        style={styles.inputBox}
        keyboardType="email-address"
        placeholder="Email Address"
        placeholderTextColor="#696969"
        value={email}
        onChangeText={(text) => handleOnChange('email', text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Set Password"
        placeholderTextColor="#696969"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => handleOnChange('password', text)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        placeholderTextColor="#696969"
        value={confirm}
        secureTextEntry={true}
        onChangeText={(text) => handleOnChange('confirm', text)}
      />

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => onSignUpPress()}>
        <Text style={styles.signUpButtonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.signIn}>
        <Text style={{fontSize: 15}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>SignIn</Text>
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
  signUpButton: {
    padding: 10,
    backgroundColor: '#daa520',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 25,
    width: 200,
    alignItems: 'center',
  },
  signUpButtonText: {
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
  signIn: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  signInText: {
    fontSize: 15,
    color: '#191970',
    fontWeight: 'bold',
  },
});
export default SignUpScreen;
