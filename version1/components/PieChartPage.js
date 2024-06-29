import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; // Ensure this package is installed
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PieChartPage = ({ navigation, route }) => {
  const { year, month, expenses } = route.params;
  const fadeAnim = new Animated.Value(0);  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getFullYear() === year && expenseDate.getMonth() + 1 === month;
  });

  const data = filteredExpenses.map(expense => ({
    name: expense.tag,
    population: expense.amount,
    color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  }));

  const maxExpense = filteredExpenses.reduce((max, expense) => expense.amount > max.amount ? expense : max, filteredExpenses[0]);

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Text style={styles.title}>Monthly Expense Report</Text>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Text style={styles.summary}>
        You have spent the most money on {maxExpense.tag}, which is the largest expense this month.
      </Text>
      <Button title="Continue >>>" onPress={() => navigation.navigate('BarChart', { year, month, expenses })} />
    </Animated.View>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  summary: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default PieChartPage;