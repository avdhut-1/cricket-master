export type LeaderboardType = 'batting' | 'bowling';

export interface PlayerStats {
  rank: number;
  name: string;
  image: string;       // URL or local asset reference
  team?: string;       // optional, if you want to show team under the name
  matches: number;      
  runs?: number;       // only for batting
  wickets?: number;    // only for bowling
  average: number;
  economy?: number;    // only for bowling
  strikeRate: number;
}