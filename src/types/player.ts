// types/player.ts
export interface Player {
  id: string;
  name: string;
  image: string;
  rank: number;
  matches: number;
  innings: number;
  runs?: number;
  average?: number;
  strikeRate?: number;
  wickets?: number;
  economy?: number;
}
