import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('AppAbout')}>
        <Text style={styles.buttonText}>App About</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Setup')}>
        <Text style={styles.buttonText}>Set Up an Account</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('SavingsAbout')}>
        <Text style={styles.buttonText}>Record Savings</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('ExpenseAbout')}>
        <Text style={styles.buttonText}>Record Expense</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('RankingsScreen')}>
        <Text style={styles.buttonText}>Your Ranking</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AboutScreen;