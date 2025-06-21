import { useState } from 'react';
import { ScrollView } from 'react-native';
import LeaderboardHeader from '../components/LeaderboardHeader';
import LeaderboardCard from '../components/LeaderboardCard';

const BowlingLeaderboard = () => {
  const [season, setSeason] = useState('2024');
  const [filter, setFilter] = useState('Most Wickets');
  const [searchQuery, setSearchQuery] = useState('');

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
      {/* Example test cards */}
      <LeaderboardCard
        type="bowling"
        player={{
          rank: 1,
          name: 'Jasprit Bumrah',
          image: 'https://example.com/bumrah.png',
          matches: 14,
          wickets: 26,
          economy: 6.5,
          average: 15.3,
          strikeRate: 14.2,
        }}
      />
      <LeaderboardCard
        type="bowling"
        player={{
          rank: 2,
          name: 'Mohammed Shami',
          image: 'https://example.com/shami.png',
          matches: 13,
          wickets: 24,
          economy: 6.9,
          average: 17.4,
          strikeRate: 15.6,
        }}
      />
    </ScrollView>
  );
};

export default BowlingLeaderboard;
