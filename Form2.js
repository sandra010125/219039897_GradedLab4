import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ProfileContext } from './ProfileContext';
import { useNavigation } from '@react-navigation/native';

const Form2 = () => {
  const { setProfile } = useContext(ProfileContext);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigation = useNavigation();

  const validateAndProceed = () => {
    if (!address.trim() || !city.trim() || !state.trim() || !zipCode.trim()) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    setProfile((prevProfile) => ({
      ...prevProfile,
      address,
      city,
      state,
      zipCode,
    }));

    navigation.navigate('Form3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Address Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="numeric"
        maxLength={5}
      />
      <TouchableOpacity style={styles.button} onPress={validateAndProceed}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#34D399', 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Form2;
