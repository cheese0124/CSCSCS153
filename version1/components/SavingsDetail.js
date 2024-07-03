import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { GoalContext } from './GoalContext';
import { useNavigation, useRoute } from '@react-navigation/native'; // Use this to navigate
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon

const SavingsDetail = () => {
  const { goals, updateGoal } = useContext(GoalContext);
  const route = useRoute();
  const { goalName } = route.params;

  console.log('Goals:', goals);
  console.log('Goal Name from route params:', goalName);

  const goal = goals.find(g => g.name.trim() === goalName.trim());

  useEffect(() => {
    console.log('Selected goal:', goal);
  }, [goal]);

  const [currentSavings, setCurrentSavings] = useState(goal ? goal.saved : 0);
  const [newSavings, setNewSavings] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    if (goal) {
      const updatedGoal = { ...goal, saved: currentSavings + parseFloat(newSavings) };
      updateGoal(updatedGoal);
      setCurrentSavings(updatedGoal.saved);
      setNewSavings('');
    } else {
      alert('Goal not found');
    }
  };

  if (!goal) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#007BFF" />
        </Pressable>
        <Text style={styles.title}>Goal Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>{goal.name}</Text>
      <Text style={styles.label}>Goal: ${goal.amount}</Text>
      <Text style={styles.label}>Saved: ${currentSavings}/{goal.amount}</Text>
      {currentSavings >= goal.amount && (
        <Text style={styles.congratulations}>Congratulations! You made it!</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter your savings"
        keyboardType="numeric"
        value={newSavings}
        onChangeText={setNewSavings}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  congratulations: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10,
    textAlign: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default SavingsDetail;