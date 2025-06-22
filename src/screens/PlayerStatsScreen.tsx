import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import StatsRow from '../components/StatsRow';
import { RootStackParamList } from '../navigation/types';

// ----- 1) Tell TypeScript what params this screen receives -----
//   RootStackParamList['PlayerStats'] is { player: Player }
type Props = NativeStackScreenProps<RootStackParamList, 'PlayerStats'>;

const PlayerStatsScreen: React.FC<Props> = ({ route }) => {
  // ----- 2) Extract the player object from route.params -----
  const { player } = route.params;

  // Destructure out the stats
  const {
    avatarUrl,
    player_name,
    batting_stats,
    bowling_stats,
    fielding_stats
  } = player;

  return (
    <ScrollView style={styles.container}>
      {/* ===== Player Header ===== */}
      <View style={styles.header}>
        {/* Player photo */}
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        {/* Player name */}
        <Text style={styles.name}>{player_name}</Text>
      </View>

      {/* ===== Batting Section ===== */}
      {batting_stats && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Batting</Text>
          <StatsRow iconName="assessment"        label="Matches"      value={batting_stats.matches} />
          <StatsRow iconName="sports-cricket"    label="Innings"      value={batting_stats.innings} />
          <StatsRow iconName="score"             label="Runs"         value={batting_stats.runs} />
          <StatsRow iconName="star"              label="Average"      value={batting_stats.average.toFixed(2)} />
          <StatsRow iconName="speed"             label="Strike Rate"  value={batting_stats.strike_rate.toFixed(2)} />
        </View>
      )}

      {/* ===== Bowling Section ===== */}
      {bowling_stats && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bowling</Text>
          <StatsRow iconName="assessment"        label="Matches"      value={bowling_stats.matches} />
          <StatsRow iconName="sports-cricket"    label="Innings"      value={bowling_stats.innings} />
          <StatsRow iconName="sports"            label="Wickets"      value={bowling_stats.wickets} />
          <StatsRow iconName="speed"             label="Economy"      value={bowling_stats.economy.toFixed(2)} />
          <StatsRow iconName="star"              label="Average"      value={bowling_stats.average.toFixed(2)} />
          <StatsRow iconName="timer"             label="Strike Rate"  value={bowling_stats.strike_rate.toFixed(2)} />
        </View>
      )}

      {/* ===== Fielding Section ===== */}
      {fielding_stats && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fielding</Text>
          <StatsRow iconName="emoji-people"      label="Dismissals"   value={fielding_stats.dismissals} />
          <StatsRow iconName="settings-suggest"  label="Caught Behind" value={fielding_stats.caught_behind} />
        </View>
      )}
    </ScrollView>
  );
};

export default PlayerStatsScreen;

/** Styles for the screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#e5e7eb',
  },
});
