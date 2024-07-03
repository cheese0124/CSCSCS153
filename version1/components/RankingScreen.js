import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RankingsScreen = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch('http://192.168.1.10:3000/rankings'); // Replace with your local IP address
        const data = await response.json();
        setRankings(data);
      } catch (error) {
        console.error('Failed to fetch rankings', error);
      }
    };

    fetchRankings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Rankings</Text>
      <FlatList
        data={rankings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.savings}>${item.savings}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rank: {
    fontSize: 18,
  },
  name: {
    fontSize: 18,
  },
  savings: {
    fontSize: 18,
  },
});

export default RankingsScreen;