import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types'; // 👈 import the types
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import PlayerStatsScreen from '../screens/PlayerStatsScreen';
import MatchDayContestScreen from '../screens/MatchDayContestScreen';
import ContestScreen from '../screens/ContestScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contest">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PlayerStats"
          component={PlayerStatsScreen}
          options={{title: 'Player Details'}}
        />
        <Stack.Screen
          name="MatchDayContest"                 
          component={MatchDayContestScreen}      
          options={{ headerShown: true }}       
        />
        <Stack.Screen
          name="Contest"
          component={ContestScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
