import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useNavigation } from '@react-navigation/native'; // Use this to navigate

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => currentYear - i); // Last 10 years
const months = [
  { name: 'January', value: 1 },
  { name: 'February', value: 2 },
  { name: 'March', value: 3 },
  { name: 'April', value: 4 },
  { name: 'May', value: 5 },
  { name: 'June', value: 6 },
  { name: 'July', value: 7 },
  { name: 'August', value: 8 },
  { name: 'September', value: 9 },
  { name: 'October', value: 10 },
  { name: 'November', value: 11 },
  { name: 'December', value: 12 },
];

const SelectMonthPage = () => {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleDone = () => {
    if (selectedMonth) {
      navigation.navigate('MonthlyExpenseReport', { year: selectedYear, month: selectedMonth });
    } else {
      alert('Please select a month');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Select Month</Text>
      <Text style={styles.subtitle}>Select Year:</Text>
      <View style={styles.yearContainer}>
        {years.map(year => (
          <Pressable
            key={year}
            style={[styles.yearButton, year === selectedYear && styles.selectedButton]}
            onPress={() => setSelectedYear(year)}
          >
            <Text style={styles.buttonText}>{year}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.subtitle}>Select Month:</Text>
      <View style={styles.monthContainer}>
        {months.map(month => (
          <Pressable
            key={month.value}
            style={[styles.monthButton, month.value === selectedMonth && styles.selectedButton]}
            onPress={() => setSelectedMonth(month.value)}
          >
            <Text style={styles.buttonText}>{month.name}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  yearContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  yearButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  monthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  monthButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: '#32CD32',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelectMonthPage;