import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ValueContext } from '../components/ValueContext'; // Import ValueContext
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useRoute and useNavigation

const screenWidth = Dimensions.get('window').width;

const YearlyBarChartPage = () => {
  const { expenses } = useContext(ValueContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { year } = route.params; // Get year from route parameters

  // Function to get the total expenses for a given month and year
  const getTotalExpenses = (year, month) => {
    return expenses
      .filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === year && (expenseDate.getMonth() + 1) === month;
      })
      .reduce((acc, expense) => acc + expense.amount, 0);
  };

  // Calculate expenses for each month of the selected year
  const monthlyExpenses = [];
  for (let month = 1; month <= 12; month++) {
    monthlyExpenses.push(getTotalExpenses(year, month));
  }

  // Prepare data for bar chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: monthlyExpenses,
    }],
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Yearly Expense Report - {year}</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Expenses</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
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
});

export default YearlyBarChartPage;