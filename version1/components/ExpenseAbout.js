import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExpenseAbout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Expense Tracking</Text>
        <Text style={styles.content}>
          This function helps you track your expenses and generate detailed reports. Here's how you can use it:
          {"\n\n"}
          1. **Select Tag for the Expense**: Choose a category that best describes your expense.
          {"\n\n"}
          2. **Enter Date and Amount**: Specify the date and amount for the expense.
          {"\n\n"}
          3. **Save the Expense**: Once you save the expense, it will be stored locally on your device.
          {"\n\n"}
          4. **Check Your Total Expense**: You can view your total expenses since using the app by going to the settings screen and selecting "Check My Total Expense".
          {"\n\n"}
          5. **View Reports**: To see detailed reports of your expenses, go to the home screen and push the "Check Your Report" button. This will provide insights and breakdowns of your spending patterns.
          {"\n\n"}
          By using this function, you can stay on top of your finances and make informed decisions based on your spending habits.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});

export default ExpenseAbout;