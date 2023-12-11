import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({navigation}: {navigation: any}) => {   
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}> Test Auth..</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },
  logo: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
  icon: {
    width:300,
    height:300
  }
});
