import { Player } from '../types/player';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined; 
  Home: undefined;
  Profile: undefined;
  Leaderboard: undefined;
  PlayerStats: { player: Player };
};
