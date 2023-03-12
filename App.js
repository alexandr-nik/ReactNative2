import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LoginScreen } from "./screens/LoginScreen";
import { RegistrationScreen } from "./screens/RegistrationScreen";

export default function App() {

  return (
    <View style={styles.container}>    
      <LoginScreen />   
      {/* <RegistrationScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
