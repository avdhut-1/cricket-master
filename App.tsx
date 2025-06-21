import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // 👈 prevent it from auto hiding

export default function App() {
  useEffect(() => {
    const hideSplash = async () => {
      // Simulate loading or any init
      await new Promise(resolve => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync(); // 👈 hide manually
    };

    hideSplash();
  }, []);

  return <AppNavigator />;
}
