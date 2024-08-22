import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ProfileContext } from './ProfileContext';
import { useNavigation } from '@react-navigation/native';

const Form3 = () => {
  const { setProfile } = useContext(ProfileContext);
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!creditCard.trim() || !expiryDate.trim() || !cvv.trim()) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    setProfile((prevProfile) => ({
      ...prevProfile,
      creditCard,
      expiryDate,
      cvv,
    }));

    navigation.navigate('Tabs', { screen: 'Profile' }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Payment Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        value={creditCard}
        onChangeText={setCreditCard}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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

export default Form3;
