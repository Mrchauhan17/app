import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';

const LoginPage = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [currentStep, setCurrentStep] = useState(1); // Track current step of the form

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    // Generate captcha logic
    const newCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(newCaptcha);
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setCurrentStep(2); // Move to the next step when user type is selected
  };

  const handleLogin = () => {
    // Check if captcha is filled
    if (formData.captcha !== captcha) {
      alert('Please enter the correct captcha.');
      // Regenerate captcha
      generateCaptcha();
      // Clear captcha field
      setFormData({ ...formData, captcha: '' });
      return;
    }
    // Implement login logic here
    console.log('User Type:', userType);
    console.log('Form Data:', formData);
    // Clear form data after login attempt
    setFormData({ username: '', password: '', captcha: '' });
    // Generate new captcha for next login attempt
    generateCaptcha();
    setCurrentStep(1); // Move back to the first step after successful login
  };

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleBack = () => {
    // Move back to the previous step
    setCurrentStep(1); // Assuming step 1 is the initial step of the form
    // Clear form data
    setFormData({ username: '', password: '', captcha: '' });
    // Reset user type
    setUserType('');
  };

  return (
    <View style={styles.container}>
      {currentStep === 1 && ( // Render heading only on step 1
        <Text style={styles.title}>Login</Text>
      )}
      {currentStep === 1 ? ( // Render step 1
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, userType === 'trucker' && styles.buttonActive]}
            onPress={() => handleUserTypeSelect('trucker')}
          >
            <Text style={styles.buttonText}>Login as Trucker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button1, userType === 'shipper' && styles.buttonActive]}
            onPress={() => handleUserTypeSelect('shipper')}
          >
            <Text style={styles.buttonText}>Login as Shipper</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Render step 2
        <ScrollView style={styles.formContainer}>
          <Text style={styles.formHeading}>
            {userType === 'trucker' ? 'Login as Trucker' : 'Login as Shipper'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            onChangeText={(text) => handleInputChange('username', text)}
            value={formData.username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => handleInputChange('password', text)}
            value={formData.password}
          />
          <View style={styles.captchaContainer}>
            <Text style={styles.captchaText}>{captcha}</Text>
            <TextInput
              style={[styles.input, styles.captchaInput]}
              placeholder="Enter Captcha"
              onChangeText={(text) => handleInputChange('captcha', text)}
              value={formData.captcha}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 40, // Add some top padding for the back button
  },
  backButton: {
    position: 'absolute',
    bottom: 20, // Adjust bottom position as needed
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    position: 'absolute',
    top: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '58%',
    position: 'absolute',
    top: 250,
    left: 93,
  },
  button1: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '58%',
    position: 'absolute',
    top: 370,
    left: 93,
  },
  buttonActive: {
    backgroundColor: '#0056b3',
  },
  formContainer: {
    width: '80%', // Adjust width as needed
    paddingHorizontal: 20,
    marginTop: 20, // Add some top margin
  },
  formHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    alignSelf: 'center', // Center the input fields
    width: '100%', // Take full width
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20, // Add some bottom margin
    alignSelf: 'center', // Center the login button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  captchaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  captchaText: {
    marginRight: 10,
    fontSize: 16,
  },
  captchaInput: {
    flex: 1,
  },
});

export default LoginPage;
