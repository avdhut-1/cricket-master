import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PlayerStats {
  image: string;
  name: string;
  rank: number;
  matches: number;
  runs?: number; // batting
  wickets?: number; // bowling
  average: number;
  strikeRate: number;
  economy?: number; // bowling only
}

interface CardProps {
  player: PlayerStats;
  type: 'batting' | 'bowling';
}

export default function LeaderboardCard({ player, type }: CardProps) {
  return (
    <View style={styles.card}>
      {/* Rank */}
      <Text style={styles.rank}>{player.rank}</Text>
      <View style={styles.playerInfo}>
        <Image source={{ uri: player.image }} style={styles.image} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
          {player.name}
        </Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statText}>{player.matches}</Text>
        <Text style={styles.statText}>{type === 'batting' ? player.runs : player.wickets}</Text>
        <Text style={styles.statTextWide}>{player.average}</Text>
        <Text style={styles.statTextWide}>
          {type === 'batting' ? player.strikeRate : player.economy}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // Tailwind's gray-200
  },
  rank: {
    width: 24,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151', // Tailwind's gray-700
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    maxWidth: 140,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12, // compact spacing
  },
  statText: {
    width: 32,
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
  statTextWide: {
    width: 40,
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
  },
});

