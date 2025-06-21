// === src/screens/HomeScreen.tsx ===
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PlayerCard } from '../components/PlayerCard';

const dummyPlayers = [
  { id: '1', name: 'Mohit', credit_score: 8.5 },
  { id: '2', name: 'Manish', credit_score: 9.0 }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fantasy Players</Text>
      <FlatList
        data={dummyPlayers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlayerCard name={item.name} credit={item.credit_score} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});