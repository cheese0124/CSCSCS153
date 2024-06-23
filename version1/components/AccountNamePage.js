import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { AccountContext } from './AccountContext'; // Import AccountContext

const AccountNamePage = ({ navigation }) => {
  const [inputName, setInputName] = useState('');
  const { setAccountName } = useContext(AccountContext); // Use context

  const handleSave = () => {
    setAccountName(inputName); // Set the account name in context
    navigation.navigate('Main'); // Navigate to the main screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your account name"
        value={inputName}
        onChangeText={setInputName}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default AccountNamePage;