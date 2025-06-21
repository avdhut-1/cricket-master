import { useState } from 'react';
import { ScrollView } from 'react-native';
import LeaderboardHeader from '../components/LeaderboardHeader';
import LeaderboardCard from '../components/LeaderboardCard';

const BattingLeaderboard = () => {
  const [season, setSeason] = useState('2024');
  const [filter, setFilter] = useState('Most Runs');
  const [searchQuery, setSearchQuery] = useState('');

  const testBattingPlayers = [
    {
      image: 'https://example.com/kohli.jpg',
      name: 'Virat Kohli',
      rank: 1,
      matches: 14,
      innings: 14,
      runs: 750,
      average: 57.7,
      strikeRate: 148.5,
    },
    {
      image: 'https://example.com/gill.jpg',
      name: 'Shubman Gill',
      rank: 2,
      matches: 14,
      innings: 14,
      runs: 712,
      average: 54.8,
      strikeRate: 142.3,
    },
  ];

  return (
    <ScrollView>
      <LeaderboardHeader
        season={season}
        setSeason={setSeason}
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {testBattingPlayers.map((player) => (
        <LeaderboardCard key={player.rank} player={player} type="batting" />
      ))}
    </ScrollView>
  );
};

export default BattingLeaderboard;
