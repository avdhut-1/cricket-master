import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MatchOverviewProps {
  teamA: { code: string; logo: string; score?: string };
  teamB: { code: string; logo: string; score?: string };
  selectedCount: number;   // e.g. 2
  maxSelect: number;       // e.g. 11
}

export default function MatchOverview({ teamA, teamB, selectedCount, maxSelect }: MatchOverviewProps) {
  // The 'pct' variable is no longer directly used for the segmented bar,
  // as each segment's color is determined by its index relative to selectedCount.
  // const pct = (selectedCount / maxSelect) * 100;

  // Ensure selectedCount is within valid bounds (0 to maxSelect)
  const safeSelectedCount = Math.max(0, Math.min(selectedCount, maxSelect));

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles.side}>
          <Image source={{ uri: teamA.logo }} style={styles.logo} />
          <Text style={styles.code}>{teamA.code}</Text>
          <Text style={styles.score}>{teamA.score ?? ''}</Text>
        </View>
        <Text style={styles.vs}>vs</Text>
        <View style={styles.side}>
          <Text style={styles.score}>{teamB.score ?? ''}</Text>
          <Text style={styles.code}>{teamB.code}</Text>
          <Image source={{ uri: teamB.logo }} style={styles.logo} />
        </View>
      </View>

      {/* Segmented Progress Bar directly embedded */}
      <View style={styles.segmentedProgressBarContainer}>
        {Array.from({ length: maxSelect }).map((_, index) => (
          <View
            key={index} // Unique key for each segment
            style={[
              styles.segment,
              {
                // Determine segment color based on selectedCount
                backgroundColor: index < safeSelectedCount ? styles.segmentFilled.backgroundColor : styles.segmentEmpty.backgroundColor,
              },
            ]}
          />
        ))}
      </View>

      <Text style={styles.progressText}>
        {selectedCount}/{maxSelect}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#000', alignItems: 'center' },
  side: { alignItems: 'center', flexDirection: 'row' },
  logo: { width: 32, height: 32, marginHorizontal: 4 },
  code: { color: '#fff', fontWeight: 'bold', marginHorizontal: 4 },
  score: { color: '#fff', fontSize: 16, marginHorizontal: 4 },
  vs: { color: '#fff', fontSize: 14, marginVertical: 8 },

  // Styles for the inline segmented progress bar
  segmentedProgressBarContainer: {
    flexDirection: 'row', // Arrange segments horizontally
    alignItems: 'center',
    justifyContent: 'center', // Center the bar horizontally
    width: '90%', // Match the old progressBg width
    marginTop: 8,
  },
  segment: {
    width: 15, // Width of each individual piece
    height: 6, // Height of each individual piece
    borderRadius: 2, // Slightly rounded corners for a softer look
    marginHorizontal: 2, // Space between each piece (half the spacing, as it's applied on both sides)
  },
  segmentFilled: {
    backgroundColor: '#0f0', // Bright green for filled segments
  },
  segmentEmpty: {
    backgroundColor: '#444', // Dark grey for empty segments
  },
  progressText: { color: '#fff', fontSize: 12, marginTop: 4 },
});
