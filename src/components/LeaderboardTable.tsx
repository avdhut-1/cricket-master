// src/components/LeaderboardTable.tsx
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { LeaderboardType, PlayerStats } from '../types/player';

interface LeaderboardTableProps {
  type: LeaderboardType;
  data: PlayerStats[];
}

export default function LeaderboardTable({ type, data }: LeaderboardTableProps) {
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

  const renderItem = ({ item }: { item: PlayerStats }) => (
    // inside your renderItem (and your header):

<View style={styles.row}>
  {/* LEFT GROUP: rank + avatar + name */}
  <View style={styles.leftGroup}>
    <Text style={styles.pos}>{item.rank}</Text>
    <Image source={{ uri: item.image }} style={styles.avatar} />
    <Text style={styles.name} numberOfLines={1}>
      {item.name}
    </Text>
  </View>

  {/* RIGHT GROUP: all stats */}
  <View style={styles.rightGroup}>
    <Text style={styles.stat}>{item.matches}</Text>
    <Text style={styles.stat}>
      {type === 'batting' ? item.runs : item.wickets}
    </Text>
    <Text style={styles.stat}>
      {type === 'batting' ? item.average : item.economy}
    </Text>
    <Text style={styles.stat}>{item.strikeRate}</Text>
  </View>
</View>

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

