// src/data/dummyPlayers.ts
import { PlayerStats } from '../types/player';

export const battingData: PlayerStats[] = [
  {
    rank: 1,
    name: 'Virat Kohli',
    image: 'https://i.pravatar.cc/100?img=1',
    team: 'RCB',
    matches: 15,
    runs: 759,
    average: 54,
    strikeRate: 156,
  },
  {
    rank: 2,
    name: 'Suryakumar Yadav',
    image: 'https://i.pravatar.cc/100?img=2',
    team: 'MI',
    matches: 16,
    runs: 717,
    average: 65,
    strikeRate: 167,
  },
  {
    rank: 3,
    name: 'Shubman Gill',
    image: 'https://i.pravatar.cc/100?img=3',
    team: 'GT',
    matches: 15,
    runs: 712,
    average: 54,
    strikeRate: 142,
  },
  // …add as many mock players as you need
];

export const bowlingData: PlayerStats[] = [
  {
    rank: 1,
    name: 'Jasprit Bumrah',
    image: 'https://i.pravatar.cc/100?img=4',
    team: 'MI',
    matches: 14,
    wickets: 26,
    average: 15.3,
    economy: 6.5,
    strikeRate: 14.2,
  },
  {
    rank: 2,
    name: 'Yuzvendra Chahal',
    image: 'https://i.pravatar.cc/100?img=5',
    team: 'RR',
    matches: 15,
    wickets: 24,
    average: 18.1,
    economy: 7.2,
    strikeRate: 14.8,
  },
  {
    rank: 3,
    name: 'Mohammed Shami',
    image: 'https://i.pravatar.cc/100?img=6',
    team: 'PBKS',
    matches: 13,
    wickets: 22,
    average: 17.4,
    economy: 6.9,
    strikeRate: 15.6,
  },
  
  // …etc.
];
