import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('RecordExpense')}>
          <Image source={require('../assets/expense.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Record Expense</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('SavingsPage')}>
          <Image source={require('../assets/saving.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Record Savings</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('CheckReport')}>
          <Image source={require('../assets/report.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Check Your Expense Report</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('BeachScreen')}>
          <Image source={require('../assets/garden.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Check Your Beach</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 120,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: '120%',
    height: '135%',
    position: 'absolute',
    borderRadius: 10,
    opacity: 0.6, // Adjust opacity as needed
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1, // Ensure text is on top of the image
  },
});

export default HomePage;