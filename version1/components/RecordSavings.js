import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useNavigation } from '@react-navigation/native'; // Use this to navigate

const RecordSavingsPage = () => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleContinue = () => {
    if (goal && date && amount) {
      navigation.navigate('SavingsSuggestionsPage', { goal, date, amount });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Record Your Savings Goal</Text>
      <Text style={styles.label}>What's your goal?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Buy a car"
        value={goal}
        onChangeText={setGoal}
      />
      <Text style={styles.label}>When needed?</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={setDate}
      />
      <Text style={styles.label}>How much?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 5000"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>See Saving Suggestions</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecordSavingsPage;