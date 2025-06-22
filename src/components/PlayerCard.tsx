// src/components/PlayerCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Player } from '../types/player';

interface PlayerCardProps {
  player: Player;
  onAdd: (p: Player) => void;
}

export default function PlayerCard({ player, onAdd }: PlayerCardProps) {
  const { rank, player_name, batting_stats, bowling_stats } = player;
  // Determine role icon & stat:
  const role = batting_stats ? 'BAT' : bowling_stats ? 'BOWL' : 'ALL';
  const pts = batting_stats ? batting_stats.runs : bowling_stats?.wickets;

  return (
    <View style={styles.row}>
      <Text style={styles.rank}>{rank}</Text>
      <Text style={styles.role}>{role}</Text>
      <Image source={{ uri: player.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={1}>{player_name}</Text>
      <Text style={styles.percent}>37.5%</Text>  {/* placeholder */}
      <Text style={styles.points}>{pts}</Text>
      <TouchableOpacity onPress={() => onAdd(player)}>
        <AntDesign name="pluscircleo" size={20} color="#0f0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rank: { width: 24, textAlign: 'center', color: '#555' },
  role: { width: 32, textAlign: 'center', color: '#888', fontSize: 12 },
  avatar: { width: 32, height: 32, borderRadius: 16, marginHorizontal: 6 },
  name: { flex: 1, fontSize: 14, color: '#111' },
  percent: { width: 48, textAlign: 'center', color: '#888', fontSize: 12 },
  points: { width: 32, textAlign: 'center', color: '#000', fontWeight: '600' },
});
