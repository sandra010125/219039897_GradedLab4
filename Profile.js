import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { ProfileContext } from './ProfileContext';
import { ThemeContext } from './ThemeContext';

const Profile = () => {
  const { profile } = useContext(ProfileContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [newColor, setNewColor] = useState('');

  const updateTheme = () => {
    if (newColor.trim()) {
      setTheme(newColor);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme }]}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>Name: {profile.name}</Text>
      <Text style={styles.text}>Email: {profile.email}</Text>
      <Text style={styles.text}>Phone: {profile.phone}</Text>
      <Text style={styles.text}>Address: {profile.address}</Text>
      <Text style={styles.text}>City: {profile.city}</Text>
      <Text style={styles.text}>State: {profile.state}</Text>
      <Text style={styles.text}>Zip Code: {profile.zipCode}</Text>
      <Text style={styles.text}>Credit Card: {profile.creditCard}</Text>
      <Text style={styles.text}>Expiry Date: {profile.expiryDate}</Text>
      <Text style={styles.text}>CVV: {profile.cvv}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Theme Color"
        value={newColor}
        onChangeText={setNewColor}
      />
      <Button title="Update Theme" onPress={updateTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    color: '#FFFFFF',
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
});

export default Profile;
