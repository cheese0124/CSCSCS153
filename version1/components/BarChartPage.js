import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import { BarChart } from 'react-native-chart-kit'; // Ensure this package is installed
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BarChartPage = ({ navigation, route }) => {
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

  const getMonthData = (year, month) => {
    return expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getFullYear() === year && expenseDate.getMonth() + 1 === month;
    });
  };

  const currentMonthData = getMonthData(year, month);
  const previousMonthDate = new Date(year, month - 2); // previous month
  const previousMonthData = getMonthData(previousMonthDate.getFullYear(), previousMonthDate.getMonth() + 1);
  const nextMonthDate = new Date(year, month); // next month
  const nextMonthData = getMonthData(nextMonthDate.getFullYear(), nextMonthDate.getMonth() + 1);

  const totalCurrentMonth = currentMonthData.reduce((sum, expense) => sum + expense.amount, 0);
  const totalPreviousMonth = previousMonthData.reduce((sum, expense) => sum + expense.amount, 0);
  const totalNextMonth = nextMonthData.reduce((sum, expense) => sum + expense.amount, 0);

  const data = {
    labels: ['Previous Month', 'Current Month', 'Next Month'],
    datasets: [
      {
        data: [
          totalPreviousMonth,
          totalCurrentMonth,
          totalNextMonth,
        ],
      },
    ],
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Text style={styles.title}>Bar Chart</Text>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
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
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={styles.summary}>
        Compared to the previous month, you spent ${totalCurrentMonth - totalPreviousMonth} more.
      </Text>
      <Button title="Continue >>>" onPress={() => navigation.navigate('Suggestions')} />
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

export default BarChartPage;