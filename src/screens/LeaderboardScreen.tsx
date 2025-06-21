import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import BattingLeaderboard from './BattingLeaderboard';
import BowlingLeaderboard from './BowlingLeaderboard';

export default function LeaderboardScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: true, // ✅ set here instead
      }}
    >
      <Tab.Screen name="Batting" component={BattingLeaderboard} />
      <Tab.Screen name="Bowling" component={BowlingLeaderboard} />
    </Tab.Navigator>
  );
}
