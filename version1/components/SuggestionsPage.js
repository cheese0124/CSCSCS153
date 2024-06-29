import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SuggestionsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What you might look for...</Text>
      <Button
        title="Professional Suggestion for Manage Expense"
        onPress={() => navigation.navigate('ChatGPT')}
      />
      <Button
        title="Friends' Experience Sharing"
        onPress={() => alert('Feature coming soon!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SuggestionsPage;