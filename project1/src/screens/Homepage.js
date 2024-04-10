import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>IMAX VENTURES</Text>
        <View style={styles.underline}></View>
        {/* <Text style={styles.h1}></Text> */}
        
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('RegisterPage')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: 40 }]}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    position:'absolute',
    top:'8%',
    left:'2%'
  },
  // 
  underline: {
    height: 2,
    backgroundColor: 'white',
    width: '75%', 
    position:'relative',
    
    bottom:220,
    right:80
    
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
