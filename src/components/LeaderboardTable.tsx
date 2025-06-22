// src/components/LeaderboardTable.tsx
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { LeaderboardType, Player } from '../types/player';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/types';

// --- type for navigation to PlayerStats screen ---
type NavProp = NativeStackNavigationProp<RootStackParamList, 'PlayerStats'>;

interface LeaderboardTableProps {
  type: LeaderboardType;
  data: Player[];
}

export default function LeaderboardTable({ type, data }: LeaderboardTableProps) {
  // get navigation typed to our stack
  const navigation = useNavigation<NavProp>();
  const renderHeader = () => (
    <View style={styles.row}>
      <View style={styles.leftGroup}>
        <Text style={styles.headerName}>PLAYER</Text>
      </View>
      <View style={styles.rightGroup}>
        <Text style={styles.stat}>M</Text>
        <Text style={styles.stat}>{type==='batting'?'R':'W'}</Text>
        <Text style={styles.stat}>{type==='batting'?'AVG':'ECO'}</Text>
        <Text style={styles.stat}>S/R</Text>
      </View>
    </View>
);

  const renderItem = ({ item }: { item: Player }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => 
        //navigate and pass the full `player` object
        navigation.navigate('PlayerStats', { player: item })
      }>
      <View style={styles.row}>
        {/* LEFT GROUP: rank + avatar + name */}
        <View style={styles.leftGroup}>
          <Text style={styles.pos}>{item.rank}</Text>
          <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
          <Text style={styles.name} numberOfLines={1}>
            {item.player_name}
          </Text>
      </View>

        {/* RIGHT GROUP: all stats */}
        <View style={styles.rightGroup}>
          <Text style={styles.stat}>{item.batting_stats?.matches}</Text>
            <Text style={styles.stat}>
              {type === 'batting' ? item.batting_stats?.runs : item.bowling_stats?.wickets}
            </Text>
            <Text style={styles.stat}>
              {type === 'batting' ? item.batting_stats?.average : item.bowling_stats?.economy}
            </Text>
            <Text style={styles.stat}>
              {type === 'batting' ? item.batting_stats?.strike_rate : item.bowling_stats?.strike_rate}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {renderHeader()}
      <FlatList
        data={data}
        keyExtractor={(p) => p.rank.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // push leftGroup to left, rightGroup to right
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },

  // left group (rank + avatar + name)
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,            // take up all leftover space
    marginRight: 12,    // space before the stats group
  },
  pos: {
    width: 24,
    textAlign: 'center',
    fontWeight: '600',
    marginRight: 6,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    flexShrink: 1,      // truncate if still too long
  },
  headerName: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 30,     // align under the avatar + rank offset
    flexShrink: 1,
  },

  // right group (your 4 stats)
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    width: 32,          // your new compact width
    textAlign: 'center',
    fontSize: 13,
    color: '#111',
    marginHorizontal: 4,
  },
  
});

