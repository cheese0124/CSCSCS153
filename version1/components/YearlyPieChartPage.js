import React, { useContext } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { ValueContext } from '../components/ValueContext'; // Import ValueContext
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useRoute and useNavigation

const screenWidth = Dimensions.get('window').width;

const YearlyPieChartPage = () => {
  const { expenses } = useContext(ValueContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { year } = route.params; // Get year from route parameters

  // Filter expenses by the selected year
  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getFullYear() === year;
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

  // Prepare data for pie chart
  const pieData = Object.keys(groupedExpenses).map((tag, index) => ({
    name: tag,
    amount: groupedExpenses[tag],
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  // Find the maximum expense amount and the tags that have this amount
  const maxAmount = Math.max(...Object.values(groupedExpenses));
  const maxTags = Object.keys(groupedExpenses).filter(tag => groupedExpenses[tag] === maxAmount);

  // Construct the summary sentence
  const summarySentence = maxTags.length > 1
    ? `You have spent $${maxAmount} on both ${maxTags.join(' and ')}, which are the largest expenses in this year.`
    : `You have spent $${maxAmount} on ${maxTags[0]}, which is the largest expense in this year.`;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Yearly Expense Report - {year}</Text>
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
        <Text style={styles.summary}>{summarySentence}</Text>
      </View>
      <Pressable style={styles.continueButton} onPress={() => navigation.navigate('YearlyBarChartPage', { year })}>
        <Text style={styles.continueButtonText}>Continue &gt;&gt;&gt;</Text>
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
  chartContainer: {
    marginVertical: 60,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default YearlyPieChartPage;