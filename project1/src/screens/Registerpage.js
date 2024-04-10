import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView } from 'react-native';
// import { insertRegistrationData } from '../../server';




const RegisterPage = () => {
  const [userType, setUserType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    companyPhone: '',
    companyWebsite: '',
    contactName: '',
    contactPhone: '',
    businessType: '',
    commodityTypes: '',
    additionalInformation: '',
    taxVatInfo: '',
    preferredPaymentMethod: '',
    termsAgreed: false,
    marketingPreferences: false,
  });

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setModalVisible(true);
  };

{}

  const handleRegistration = () => {
    console.log("halwa start")
   const postdata= {signUp:[{"email":"tinku@gmail.com","pwd":"kuchbi123","account_type":"user","validation":""}]}

    // const handleRegistration = () => {
    //   insertRegistrationData(formData);
    // };


  
    // console.log('User Type:', userType);
    // console.log('Form Data:', formData);
    // console.log('Form Data:', formData.email);
    // setModalVisible(false);

    console.log("halwa")
    axios.post('http://yzulu.com/api/v1/signup/create-account', postdata, {
      withCredentials: true
      // Add any required headers here, e.g., for authentication
      // 'Authorization': `Bearer ${your_access_token}`
    }).then((response) => {
      console.log(response.data);
      // Optionally, you can handle the response here, such as updating state or showing a success message
    }).catch((error) => {
      console.error('Error:', error);
      // Optionally, handle any errors that occur during the request
    });
  }
  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleBackButton = () => {
    setModalVisible(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      companyPhone: '',
      companyWebsite: '',
      contactName: '',
      contactPhone: '',
      businessType: '',
      commodityTypes: '',
      additionalInformation: '',
      taxVatInfo: '',
      preferredPaymentMethod: '',
      termsAgreed: false,
      marketingPreferences: false,
    });
  };




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {!modalVisible && (
        <View>
          <TouchableOpacity
            style={[styles.button, userType === 'trucker' && styles.buttonActive]}
            onPress={() => handleUserTypeSelect('trucker')}
          >
            <Text style={styles.buttonText}>Register as Trucker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, userType === 'shipper' && styles.buttonActive]}
            onPress={() => handleUserTypeSelect('shipper')}
          >
            <Text style={styles.buttonText}>Register as Shipper</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.modalTitle}>
              Register as {userType === 'trucker' ? 'Trucker' : 'Shipper'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={(text) => handleInputChange('firstName', text)}
              value={formData.firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={(text) => handleInputChange('lastName', text)}
              value={formData.lastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => handleInputChange('email', text)}
              value={formData.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => handleInputChange('password', text)}
              value={formData.password}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={(text) => handleInputChange('confirmPassword', text)}
              value={formData.confirmPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              onChangeText={(text) => handleInputChange('companyName', text)}
              value={formData.companyName}
            />
            <TextInput
              style={styles.input}
              placeholder="Street Address"
              onChangeText={(text) => handleInputChange('streetAddress', text)}
              value={formData.streetAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              onChangeText={(text) => handleInputChange('city', text)}
              value={formData.city}
            />
            <TextInput
              style={styles.input}
              placeholder="State/Province"
              onChangeText={(text) => handleInputChange('state', text)}
              value={formData.state}
            />
            <TextInput
              style={styles.input}
              placeholder="Zip/Postal Code"
              onChangeText={(text) => handleInputChange('zipCode', text)}
              value={formData.zipCode}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              onChangeText={(text) => handleInputChange('country', text)}
              value={formData.country}
            />
            <TextInput
              style={styles.input}
              placeholder="Company Phone"
              onChangeText={(text) => handleInputChange('companyPhone', text)}
              value={formData.companyPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="Company Website (optional)"
              onChangeText={(text) => handleInputChange('companyWebsite', text)}
              value={formData.companyWebsite}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Name"
              onChangeText={(text) => handleInputChange('contactName', text)}
              value={formData.contactName}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Phone"
              onChangeText={(text) => handleInputChange('contactPhone', text)}
              value={formData.contactPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="Business Type"
              onChangeText={(text) => handleInputChange('businessType', text)}
              value={formData.businessType}
            />
            <TextInput
              style={styles.input}
              placeholder="Commodity Types"
              onChangeText={(text) => handleInputChange('commodityTypes', text)}
              value={formData.commodityTypes}
            />
            <TextInput
              style={styles.input}
              placeholder="Additional Information"
              onChangeText={(text) => handleInputChange('additionalInformation', text)}
              value={formData.additionalInformation}
            />
            <TextInput
              style={styles.input}
              placeholder="Tax/VAT Information"
              onChangeText={(text) => handleInputChange('taxVatInfo', text)}
              value={formData.taxVatInfo}
            />
            <TextInput
              style={styles.input}
              placeholder="Preferred Payment Method"
              onChangeText={(text) => handleInputChange('preferredPaymentMethod', text)}
              value={formData.preferredPaymentMethod}
            />
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleInputChange('termsAgreed', !formData.termsAgreed)}
              >
                {formData.termsAgreed && <Text style={styles.checkboxText}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleInputChange('marketingPreferences', !formData.marketingPreferences)}
              >
                {formData.marketingPreferences && <Text style={styles.checkboxText}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>I want to receive marketing emails</Text>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonActive: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '30%',
  },
  registerButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '30%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default RegisterPage;


