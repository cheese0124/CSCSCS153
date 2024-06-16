import React, { useContext } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ValueContext } from '../components/ValueContext'; // Import ValueContext
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useRoute and useNavigation

const screenWidth = Dimensions.get('window').width;

const MonthlyExpenseReport = () => {
  const { expenses } = useContext(ValueContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { year, month } = route.params; // Get year and month from route parameters

  // Filter expenses by the selected month and year
  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getFullYear() === year && (expenseDate.getMonth() + 1) === month;
  });

  // Group filtered expenses by tag and calculate totals
  const groupedExpenses = filteredExpenses.reduce((acc, expense) => {
    const { tag, amount } = expense;
    if (!acc[tag]) {
      acc[tag] = 0;
    }
    acc[tag] += amount;
    return acc;
  }, {});

  // Prepare data for charts
  const barData = {
    labels: Object.keys(groupedExpenses),
    datasets: [{
      data: Object.values(groupedExpenses),
    }],
  };

  const pieData = Object.keys(groupedExpenses).map((tag, index) => ({
    name: tag,
    amount: groupedExpenses[tag],
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Monthly Expense Report - {month}/{year}</Text>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Bar Chart</Text>
        <BarChart
          data={barData}
          width={screenWidth - 40}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Pie Chart</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
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
    marginVertical: 10,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default MonthlyExpenseReport;