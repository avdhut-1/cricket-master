// src/components/InfoStats.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * A row of small bullet‐style stats:
 *    [Pitch: Batting]  •  [Good for: Pace]  •  [Avg Score: 150]
 */
interface InfoStatsProps {
  pitch: string;
  goodFor: string;
  avgScore: number;
}

export default function InfoStats({ pitch, goodFor, avgScore }: InfoStatsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}><Text style={styles.label}>Pitch:</Text> {pitch}</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.item}><Text style={styles.label}>Good for:</Text> {goodFor}</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.item}><Text style={styles.label}>Avg Score:</Text> {avgScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 12, backgroundColor: '#111' },
  item: { color: '#eee', fontSize: 12 },
  label: { fontWeight: 'bold', color: '#fff' },
  dot: { marginHorizontal: 6, color: '#aaa' },
});
