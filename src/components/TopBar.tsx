// src/components/TopBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TopBarProps {
  title: string;
  countdown: string;         // e.g. "1h 44m left"
  onBack: () => void;
}

export default function TopBar({ title, countdown, onBack }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{countdown}</Text>
      </View>
      {/* Right area can hold profile/points button later */}
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    padding: 12,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
  },
});
