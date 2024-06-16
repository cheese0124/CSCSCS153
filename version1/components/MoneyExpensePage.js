import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { useValue } from '../components/ValueContext'; // Import useValue

const RecordExpensePage = ({ navigation }) => {
  const [tag, setTag] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useValue();

  const handleAddExpense = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      addExpense({ tag, date, amount: parsedAmount });
      setTag('');
      setDate('');
      setAmount('');
    }
  };

  const handleDateChange = (input) => {
    const digitsOnly = input.replace(/\D/g, '');
    let formattedDate = '';

    if (digitsOnly.length > 0) {
      formattedDate = digitsOnly.slice(0, 4);
    }
    if (digitsOnly.length > 4) {
      formattedDate += '-' + digitsOnly.slice(4, 6);
    }
    if (digitsOnly.length > 6) {
      formattedDate += '-' + digitsOnly.slice(6, 8);
    }

    setDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Record Expense</Text>
      <Text>Select a tag:</Text>
      <TextInput style={styles.input} placeholder="Tag" value={tag} onChangeText={setTag} />
      <Text>Enter the date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={date}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10} // Limit to 10 characters: YYYY-MM-DD
      />
      <Text>Enter the amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Pressable style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => { setTag(''); setDate(''); setAmount(''); }}>
        <Text style={styles.buttonText}>Clear</Text>
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
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecordExpensePage;