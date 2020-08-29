import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          type="material-community"
          name="logout"
          color="#000"
          size={30}
          onPress={() => {
            Alert.alert('Logout', 'Are You Sure You Want To Logout?', [
              {
                text: 'Yes',
                onPress: () => {
                  Alert.alert('Logged Out Successfully', 'Thank You');
                },
              },
              {
                text: 'No',
              },
            ]);
          }}></Icon>
      ),
    });
  });
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Home;
