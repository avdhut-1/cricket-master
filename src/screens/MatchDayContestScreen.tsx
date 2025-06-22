// src/screens/MatchDayContestScreen.tsx

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import TopBar             from '../components/TopBar';
import MatchOverview     from '../components/MatchOverview';
import InfoStats         from '../components/InfoStats';
import PositionTabs      from '../components/PositionTabs';
import PlayerSelectionList from '../components/PlayerSelectionList';
import TwoTeamGrid       from '../components/TwoTeamGrid';

import { Player }        from '../types/player';


// ——— 1) Mock lineups for “Past Lineup” ———
// Replace these with your actual last-match XI data later.
const mockWIW: Player[] = [
  {
    rank: 1,
    player_name: 'Q Joseph',
    avatarUrl: 'https://i.pravatar.cc/100?img=21',
    batting_stats: { matches: 8, innings: 8, runs: 300, average: 37.5, strike_rate: 120.5 },
    bowling_stats: undefined,
    credit_score: 8.0,
  },
  {
    rank: 2,
    player_name: 'Q Joseph',
    avatarUrl: 'https://i.pravatar.cc/100?img=21',
    batting_stats: { matches: 8, innings: 8, runs: 300, average: 37.5, strike_rate: 120.5 },
    bowling_stats: undefined,
    credit_score: 8.0,
  },
];

const mockSAW: Player[] = [
  {
    rank: 1,
    player_name: 'L Wolvaardt',
    avatarUrl: 'https://i.pravatar.cc/100?img=22',
    batting_stats: { matches: 8, innings: 8, runs: 340, average: 42.5, strike_rate: 125.7 },
    bowling_stats: undefined,
    credit_score: 8.2,
  },
  {
    rank: 2,
    player_name: 'Q Joseph',
    avatarUrl: 'https://i.pravatar.cc/100?img=21',
    batting_stats: { matches: 8, innings: 8, runs: 300, average: 37.5, strike_rate: 120.5 },
    bowling_stats: undefined,
    credit_score: 8.0,
  },
];


// ——— 2) Mock data for other tabs ———
const mockWK: Player[]  = [ /* … */ ];
const mockBAT: Player[] = [ /* … */ ];
const mockAR: Player[]  = [ /* … */ ];
const mockBOWL: Player[] = [ /* … */ ];


export default function MatchDayContestScreen() {
  // ——— 3) Tab state ———
  const [tab, setTab] = useState<
    'Past Lineup' | 'WK' | 'BAT' | 'AR(2)' | 'BOWL'
  >('Past Lineup');

  // ——— 4) Selected players count ———
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  // ——— 5) Add‐to‐team handler ———
  const handleAdd = (p: Player) => {
    if (selectedPlayers.length < 11) {
      setSelectedPlayers((prev) => [...prev, p]);
    }
  };

  // ——— 6) Pick data for non‐Past tabs ———
  let dataToShow: Player[];
  switch (tab) {
    case 'WK':    dataToShow = mockWK;   break;
    case 'BAT':   dataToShow = mockBAT;  break;
    case 'AR(2)': dataToShow = mockAR;   break;
    case 'BOWL':  dataToShow = mockBOWL; break;
    default:      dataToShow = [];       // won’t be used for Past Lineup
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar with back button, title, countdown */}
      <TopBar
        title="Create Team"
        countdown="1h 44m left"
        onBack={() => { /* navigation.goBack() */ }}
      />

      {/* Match overview & selection progress */}
      <MatchOverview
        teamA={{ code: 'WI-W', logo: 'https://i.pravatar.cc/32?img=10', score: '0' }}
        teamB={{ code: 'SA-W', logo: 'https://i.pravatar.cc/32?img=20', score: '2' }}
        selectedCount={selectedPlayers.length}
        maxSelect={11}
      />

      {/* Pitch / Good-for / Avg Score */}
      <InfoStats pitch="Batting" goodFor="Pace" avgScore={150} />

      {/* WK / BAT / AR(2) / BOWL tabs */}
      <PositionTabs selected={tab} onSelect={setTab} />

      {/* 
        Conditionally render:
        - TwoTeamGrid for Past Lineup
        - PlayerSelectionList for the other tabs 
      */}
      {tab === 'Past Lineup' ? (
        <TwoTeamGrid
          leftTeam={mockWIW}
          rightTeam={mockSAW}
          onAdd={handleAdd}
        />
      ) : (
        <PlayerSelectionList
          data={dataToShow}
          onAdd={handleAdd}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
