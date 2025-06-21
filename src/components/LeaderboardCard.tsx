import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PlayerStats {
  image: string;
  name: string;
  rank: number;
  matches: number;
  innings: number;
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

const LeaderboardCard = ({ player, type }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: player.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{`${player.rank}. ${player.name}`}</Text>
        <View style={styles.stats}>
          <Text>Mat: {player.matches}</Text>
          <Text>Inn: {player.innings}</Text>
          {type === 'batting' ? (
            <>
              <Text>Runs: {player.runs}</Text>
              <Text>Avg: {player.average}</Text>
              <Text>SR: {player.strikeRate}</Text>
            </>
          ) : (
            <>
              <Text>Wkts: {player.wickets}</Text>
              <Text>Eco: {player.economy}</Text>
              <Text>Avg: {player.average}</Text>
              <Text>SR: {player.strikeRate}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default LeaderboardCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 6,
    elevation: 3,
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { marginLeft: 12, flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16 },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
  },
});
