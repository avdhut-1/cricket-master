// src/screens/SplashScreen.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function AppSplashScreen() {
  const [appReady, setAppReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function prepare() {
      try {
    
        // Simulate some loading time (e.g., fetching initial user data, config)
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
      // Navigation logic (if you were navigating directly from here)
      // For now, App.tsx handles the switch to main navigation.
    }
  }, [appReady]);

  if (!appReady) {
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image
          source={require('../../assets/images/splash.png')} // Ensure 'assets/logo.png' exists
          style={styles.logo}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Loading your Cricket Adventure...</Text>
      </View>
    );
  }

  return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        {/*
          This View is just to ensure onLayoutRootView is called.
          App.tsx will render the main navigation after `appReady` is true.
        */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loadingText: {
    color: '#fff',
    marginTop: 15,
    fontSize: 16,
  },
});