import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon

const RecordSavingsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#FF69B4" />
      </Pressable>
      <Text style={styles.title}>Record Savings</Text>
      <Text>This is your saving</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
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
});

export default RecordSavingsPage;