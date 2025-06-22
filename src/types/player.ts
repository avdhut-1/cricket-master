export type LeaderboardType = 'batting' | 'bowling';

export interface Player {
  rank: number;
  player_name: string;
  avatarUrl: string;
  batting_stats?: {
    matches: number;
    innings: number;
    runs: number;
    average: number;
    strike_rate: number;
  };
  bowling_stats?: {
    matches: number;
    innings: number;
    wickets: number;
    economy: number;
    average: number;
    strike_rate: number;
  };
  fielding_stats?: {
    dismissals: number;
    caught_behind: number;
  };
}
