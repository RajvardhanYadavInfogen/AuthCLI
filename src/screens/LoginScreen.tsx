import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  PermissionsAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TouchID from 'react-native-touch-id';

import {users} from '../data/Users';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = users.find(
      user => user.name == username && user.password == password,
    );
    if (user) {
      navigation.navigate('Home');
    } else {
      Alert.alert('wrong username or password');
    }

  };

  async function authenticate() {


    console.log('hi');
    TouchID.authenticate('to demo this react-native component')
      .then((success: any) => {
        console.log('authentication successfull');
        navigation.navigate('Home');
      })
      .catch((error: any) => {
        console.log('authentication failed');
      });

  }

  useEffect(() => {
    authenticate();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/user.png')}
        style={{width: 100, height: 100, marginBottom: 20}}
      />
      <Text style={styles.header}>Login.</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={{left: 2, width: '80%', marginBottom: 20}}
        onPress={authenticate}>
        <Text style={{fontWeight: 'bold'}}>
          Login with Face/Fingerprint ID?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },

  header: {
    fontSize: 38,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#E4E6EA',
  },
  button: {
    backgroundColor: '#5F8BE2',
    padding: 10,
    borderRadius: 15,
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
