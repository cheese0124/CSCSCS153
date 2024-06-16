import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ValueContext } from '../components/ValueContext'; // Import ValueContext

const HomePage = ({ navigation }) => {
  const { totalAmount } = useContext(ValueContext); // Use context to get totalAmount

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Pressable style={[styles.button, styles.expenseButton]} onPress={() => navigation.navigate('RecordExpense')}>
          <Text style={styles.buttonText}>Record Expenses</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.savingsButton]} onPress={() => navigation.navigate('RecordSavings')}>
          <Text style={styles.buttonText}>Record Savings</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.reportButton]} onPress={() => navigation.navigate('CheckReport')}>
          <Text style={styles.buttonText}>Check Your Report</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.gardenButton]} onPress={() => navigation.navigate('CheckGarden')}>
          <Text style={styles.buttonText}>Check Your Garden</Text>
        </Pressable>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>You have expensed ${totalAmount.toFixed(2)} so far</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>You have saved $0.00 so far</Text> {/* Placeholder for savings */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange items in a row
    padding: 20,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 2, // Larger section for main content
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
  },
  summaryContainer: {
    flex: 1, // Smaller section for summary
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', // Ensure full width
  },
  expenseButton: {
    backgroundColor: '#007BFF', // Blue for Record Expenses
  },
  savingsButton: {
    backgroundColor: '#FF69B4', // Pink for Record Savings
  },
  reportButton: {
    backgroundColor: '#32CD32', // Green for Check Your Report
  },
  gardenButton: {
    backgroundColor: '#FFA500', // Orange for Check Your Garden
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%', // Make the box occupy the full width
  },
  boxText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomePage;