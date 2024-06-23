import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { AccountContext } from './AccountContext';
import { ValueContext } from './ValueContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingScreen = () => {
  const { accountName, setAccountName } = useContext(AccountContext);
  const { setExpenses } = useContext(ValueContext); // Get setExpenses from ValueContext
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clear all local storage
      setAccountName(''); // Reset account name in context
      setExpenses([]); // Reset expenses in context
      Alert.alert("Logged Out", "You have been logged out.");
      navigation.reset({
        index: 0,
        routes: [{ name: 'AnimatedBegin' }],
      }); // Navigate to the begin screen
    } catch (error) {
      console.error('Failed to log out and clear storage', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome, {accountName}!</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('TotalExpense')}>
        <Text style={styles.buttonText}>Check My Total Expense</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('TotalSavings')}>
        <Text style={styles.buttonText}>Check My Total Savings</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('ChangeAccountName')}>
        <Text style={styles.buttonText}>Change My Account Name</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('ClearAllData')}>
        <Text style={styles.buttonText}>Clear All My Data</Text>
      </Pressable>

      {/* Log Out Button */}
      <Pressable style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF6347', // Different color for the log out button
  },
});

export default SettingScreen;