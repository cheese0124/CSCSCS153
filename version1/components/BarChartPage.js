import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ValueContext } from '../components/ValueContext'; // Import ValueContext
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useRoute and useNavigation

const screenWidth = Dimensions.get('window').width;

const BarChartPage = () => {
  const { expenses } = useContext(ValueContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { year, month } = route.params; // Get year and month from route parameters

  // Function to get the total expenses for a given month and year
  const getTotalExpenses = (year, month) => {
    return expenses
      .filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === year && (expenseDate.getMonth() + 1) === month;
      })
      .reduce((acc, expense) => acc + expense.amount, 0);
  };

  // Calculate expenses for the selected month, previous month, and next month
  const currentTotal = getTotalExpenses(year, month);
  const previousMonth = month === 1 ? 12 : month - 1;
  const previousYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const previousTotal = getTotalExpenses(previousYear, previousMonth);
  const nextTotal = getTotalExpenses(nextYear, nextMonth);

  // Prepare data for bar chart
  const barData = {
    labels: [
      `${previousYear}-${previousMonth < 10 ? '0' + previousMonth : previousMonth}`,
      `${year}-${month < 10 ? '0' + month : month}`,
      `${nextYear}-${nextMonth < 10 ? '0' + nextMonth : nextMonth}`
    ],
    datasets: [{
      data: [previousTotal, currentTotal, nextTotal],
    }],
  };

  // Determine the comparison text
  const comparisonText = previousTotal !== 0 ? `You have spent ${currentTotal - previousTotal >= 0 ? '$' + (currentTotal - previousTotal) + ' more' : '$' + (previousTotal - currentTotal) + ' less'} than last month.` : '';

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Monthly Expense Report - {month}/{year}</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Month-to-Month Comparison</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
        <Text style={styles.comparisonText}>{comparisonText}</Text>
      </View>
      <Pressable style={styles.doneButton} onPress={() => navigation.navigate('SuggestionsPage')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </Pressable>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#FFF",
  backgroundGradientTo: "#FFF",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 20,
  },
  chartContainer: {
    marginVertical: 60,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  comparisonText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BarChartPage;