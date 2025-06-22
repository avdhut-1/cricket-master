// src/components/PositionTabs.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type PositionTab = | 'Past Lineup' | 'WK' | 'BAT' | 'AR(2)'  | 'BOWL';

const positions: PositionTab[] = [
  'Past Lineup', 'WK', 'BAT', 'AR(2)', 'BOWL'
];

interface PositionTabsProps {
  selected: PositionTab;
  onSelect: (pos: PositionTab) => void;

}

export default function PositionTabs({ selected, onSelect }: PositionTabsProps) {
  return (
    <View style={styles.container}>
      {positions.map((pos) => (
        <TouchableOpacity key={pos} onPress={() => onSelect(pos)}>
          <Text style={[
            styles.tab,
            selected === pos && styles.tabActive
          ]}>
            {pos}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#000' },
  tab: { color: '#888', paddingVertical: 8, paddingHorizontal: 12 },
  tabActive: { color: '#fff', borderBottomWidth: 2, borderColor: '#f00' },
});
