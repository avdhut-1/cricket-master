// src/components/StatsRow.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// We’ll use MaterialIcons for stat icons — feel free to swap for any expo/vector-icons set
import { MaterialIcons } from '@expo/vector-icons';

interface StatsRowProps {
  /** The name of the MaterialIcons icon to show */
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  /** Label text, e.g. "Runs" */
  label: string;
  /** Value text or number, e.g. "759" or 42 */
  value: string | number;
}

/**
 * A single row showing one statistic:
 * [icon]  [label]       [value]
 */
const StatsRow: React.FC<StatsRowProps> = ({ iconName, label, value }) => {
  return (
    <View style={styles.row}>
      {/* Left icon */}
      <MaterialIcons name={iconName} size={20} color="#555" style={styles.icon} />
      {/* Middle label */}
      <Text style={styles.label}>{label}</Text>
      {/* Spacer pushes value to the right */}
      <View style={styles.spacer} />
      {/* Right value */}
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default StatsRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',       // lay out children in a row
    alignItems: 'center',       // vertically center
    paddingVertical: 12,        // vertical tap area
    paddingHorizontal: 16,      // horizontal padding
    borderBottomWidth: 1,       // a light separator
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 12,            // space between icon & label
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  spacer: {
    flex: 1,                    // pushes the value text to the far right
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
