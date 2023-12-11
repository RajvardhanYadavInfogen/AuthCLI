/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import TouchID from 'react-native-touch-id';
import AppNavigator from './src/AppNavigator';

function App() {



  return (
   
      <View style={styles.container} >
        <AppNavigator />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
});

export default App;
