import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('RecordExpense')}>
          <Image source={require('../assets/expense.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Record Expense</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('RecordSavings')}>
          <Image source={require('../assets/saving.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Record Savings</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('CheckReport')}>
          <Image source={require('../assets/report.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Check Your Report</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate('CheckGarden')}>
          <Image source={require('../assets/garden.jpg')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Check Your Garden</Text>
        </Pressable>
      </View>
    </View>
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
    fontSize: 28,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 100,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
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