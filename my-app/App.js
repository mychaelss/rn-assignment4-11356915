import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPgae from "./components/loginpage.js";
import UserPage from './components/Userpage.js';
export default function App() {
  return (
    <View style={styles.container}>
    
      <UserPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
