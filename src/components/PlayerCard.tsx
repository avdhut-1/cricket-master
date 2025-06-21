// === src/components/PlayerCard.tsx ===
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlayerCardProps {
  name: string;
  credit: number;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ name, credit }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.credit}>Credit Score: {credit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  credit: {
    fontSize: 16,
    color: '#555'
  }
});