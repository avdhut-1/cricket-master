// src/screens/BattingLeaderboardScreen.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import StatFilterDropdown from '../components/StatFilterDropdown';
import LeaderboardTable from '../components/LeaderboardTable';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';  // your season dropdown

import { battingData } from '../data/dummyPlayers'; // your mock data
import { LeaderboardType } from '../types/player';

export default function BattingLeaderboardScreen() {
  const [season, setSeason] = useState('2024');
  const [type, setType] = useState<LeaderboardType>('batting');
  const [stat, setStat] = useState('Orange Cap');
  const [query, setQuery] = useState('');

  // you’d filter battingData by query & stat here
  const filtered = battingData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      {/* top row: season / stat / search */}
      <View style={{ flexDirection: 'row', padding: 8 }}>
        <Dropdown
          label="Season"
          options={['2022', '2023', '2024']}
          selectedValue={season}
          onValueChange={setSeason}
        />
        <StatFilterDropdown
          type={type}
          selected={stat}
          onSelect={setStat}
          onTypeChange={setType}
        />
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search player..."
        />
      </View>

      {/* table */}
      <LeaderboardTable type="batting" data={filtered} />
    </View>
  );
}
