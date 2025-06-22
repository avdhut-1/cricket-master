// src/screens/LeaderboardScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Dropdown from '../components/Dropdown';
import StatFilterDropdown from '../components/StatFilterDropdown';
import SearchBar from '../components/SearchBar';
import LeaderboardTable from '../components/LeaderboardTable';
import { battingData, bowlingData } from '../data/dummyPlayers';
import { LeaderboardType } from '../types/player';

export default function LeaderboardScreen() {
  const [season, setSeason] = useState('2024');
  const [type, setType] = useState<LeaderboardType>('batting');
  const [stat, setStat] = useState(type === 'batting' ? 'Orange Cap' : 'Purple Cap');
  const [query, setQuery] = useState('');

  // pick the right data array
  const raw = type === 'batting' ? battingData : bowlingData;

  // filter by search (and later by `stat` & `season`)
  const filtered = raw.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <View style={styles.searchWrapper}>
          <SearchBar
          placeholder="Search player…"
          value={query}
          onChangeText={setQuery}
        />
        </View>
        <View style={styles.filterWrapper}>
          <StatFilterDropdown
          type={type}
          selected={stat}
          onSelect={setStat}
          onTypeChange={(t) => {
            setType(t);
            setStat(t === 'batting' ? 'Orange Cap' : 'Purple Cap');
          }}
        />
        </View>
      </View>
      <LeaderboardTable type={type} data={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f8f8f8',
  },
  searchWrapper: {
    flex: 1,
    marginRight: 8,
  },
  filterWrapper: {
    width: 120,
  },
});
