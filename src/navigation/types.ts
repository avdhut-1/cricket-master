import { Player } from '../types/player';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined; 
  Profile: undefined;
  Leaderboard: undefined;
  PlayerStats: { player: Player };
  MatchDayContest: undefined;
};
