import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { GoalContext } from './GoalContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon

const SavingsPlanList = () => {
  const { goals } = useContext(GoalContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      {goals.map(goal => (
        <Pressable
          key={goal.name}
          style={styles.goalButton}
          onPress={() => navigation.navigate('SavingsDetail', { goalName: goal.name })}
        >
          <Text style={styles.goalButtonText}>{goal.name}</Text>
        </Pressable>
      ))}
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
  goalButton: {
    backgroundColor: '#00ffff',
    padding: 15,
    marginVertical: 30,
    borderRadius: 5,
  },
  goalButtonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SavingsPlanList;