// TotalSavingsReport.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GoalContext } from './GoalContext'; // Import GoalContext
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const TotalSavingsReport = () => {
  const { goals } = useContext(GoalContext);
  const navigation = useNavigation();

  const totalSavings = goals.reduce((sum, goal) => sum + goal.saved, 0);

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>
      <Text style={styles.title}>Total Savings</Text>
      <Text style={styles.totalAmount}>${totalSavings.toFixed(2)}</Text>
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 24,
    color: '#007BFF',
  },
});

export default TotalSavingsReport;