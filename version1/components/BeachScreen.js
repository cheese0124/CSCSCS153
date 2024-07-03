import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { GoalContext } from './GoalContext';

const BeachScreen = () => {
  const { goals } = useContext(GoalContext);

  const completedGoals = goals.filter(goal => goal.saved >= goal.amount);

  return (
    <ImageBackground source={require('../assets/beach.png')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Beach</Text>
        {completedGoals.length === 0 ? (
          <Text style={styles.noGoalsText}>No shells yet. Complete your goals to collect shells!</Text>
        ) : (
          completedGoals.map((goal, index) => (
            <View key={index} style={styles.shellContainer}>
              <Image source={require('../assets/shell.png')} style={styles.shellImage} />
              <Text style={styles.shellText}>{goal.name}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the image size to cover the entire background
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding a slight white overlay for better readability
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000', // Text color
  },
  noGoalsText: {
    fontSize: 18,
    color: '#888',
  },
  shellContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  shellImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  shellText: {
    fontSize: 16,
    color: '#000', // Text color
  },
});

export default BeachScreen;