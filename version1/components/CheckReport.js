import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon

const CheckReportPage = ({ navigation }) => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#32CD32" />
      </Pressable>
      <Text style={styles.title}>Check Your Report</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expense</Text>
        <Pressable style={[styles.button, styles.expenseButton]} onPress={() => navigation.navigate('SelectMonthPage')}>
          <Text style={styles.buttonText}>Monthly Report</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.expenseButton]} onPress={() => navigation.navigate('YearlyPieChartPage', { year: currentYear })}>
          <Text style={styles.buttonText}>Yearly Report</Text>
        </Pressable>
      </View>
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  expenseButton: {
    backgroundColor: '#FF6347',
  },
  savingButton: {
    backgroundColor: '#4682B4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckReportPage;