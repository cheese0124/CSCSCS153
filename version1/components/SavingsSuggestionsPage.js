import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { differenceInWeeks, parseISO } from 'date-fns';

const SavingsSuggestionsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { goal, date, amount } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateSavingsPlan();
  }, []);

  const generateSavingsPlan = () => {
    setLoading(true);
    try {
      const targetDate = parseISO(date);
      const currentDate = new Date();
      const weeks = differenceInWeeks(targetDate, currentDate);
      const weeklyAmount = (amount / weeks).toFixed(2);

      const suggestions = Array.from({ length: weeks }, (_, index) => ({
        week: index + 1,
        amount: weeklyAmount
      }));

      setData(suggestions);
      setLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to generate suggestions. Please check your input and try again.');
      setLoading(false);
    }
  };

  const Suggestion = ({ week, amount }) => (
    <View style={styles.responseContainer}>
      <Text style={styles.responseText}>Week {week}: Save ${amount}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Savings Suggestions</Text>
      <Text style={styles.label}>Goal: {goal}</Text>
      <Text style={styles.label}>When needed: {date}</Text>
      <Text style={styles.label}>Amount: ${amount}</Text>
      <Button
        onPress={generateSavingsPlan}
        title={loading ? 'Loading...' : 'Get Suggestions'}
        color="#841584"
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('SavingsPage')}>
        <Text style={styles.buttonText}>Got it!</Text>
      </Pressable>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    </SafeAreaView>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  responseContainer: {
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 20,
  },
  responseText: {
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SavingsSuggestionsPage;