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

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     console.log('Props in SignUp', props);
//   }
//   render() {

const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../logo_quiz.jpg')} />

      <TextInput
        style={styles.inputBox}
        placeholder="Username"
        placeholderTextColor="#696969"
      />
      <TextInput
        style={styles.inputBox}
        keyboardType="email-address"
        placeholder="Email Address"
        placeholderTextColor="#696969"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Set Password"
        placeholderTextColor="#696969"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        placeholderTextColor="#696969"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.signUpButton}>
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
// }
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
    width: 150,
    height: 150,
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
