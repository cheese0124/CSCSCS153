import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { GoalContext } from '../components/GoalContext'; // Import GoalContext

const GoalPage = () => {
  const navigation = useNavigation();
  const { setGoalData } = useContext(GoalContext); // Use GoalContext to set goal data

  const [goalName, setGoalName] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [weeklySavings, setWeeklySavings] = useState('');

  const handleSave = () => {
    if (!goalName || !goalDate || !weeklySavings) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setGoalData({ goalName, goalDate, weeklySavings });

    Alert.alert('Success', 'You almost there!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('HomeScreen'), // Ensure the navigation to the main screen
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Set Your Saving Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Give your goal a name"
        value={goalName}
        onChangeText={setGoalName}
      />
      <TextInput
        style={styles.input}
        placeholder="What's the goal day (YYYY-MM-DD)"
        value={goalDate}
        onChangeText={setGoalDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="How much you are planning to save in a week"
        value={weeklySavings}
        onChangeText={setWeeklySavings}
        keyboardType="numeric"
      />
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
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
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#32CD32',
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

export default GoalPage;