import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppAbout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.content}>
        Welcome to our Expense and Savings Tracker App! This app is designed to help you manage your finances efficiently. With our app, you can:
        {"\n\n"}
        - Record and track your expenses easily with detailed reports.
        {"\n"}
        - Set up savings goals and monitor your progress towards achieving them.
        {"\n"}
        - Get personalized savings suggestions to help you reach your financial goals.
        {"\n"}
        - Visualize your spending and savings with interactive charts and reports.
        {"\n\n"}
        Our goal is to provide you with the tools and insights you need to take control of your financial future. Thank you for choosing our app!
      </Text>
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

export default AppAbout;