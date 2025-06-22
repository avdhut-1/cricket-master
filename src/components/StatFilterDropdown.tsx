// src/components/StatFilterDropdown.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

type LeaderboardType = 'batting' | 'bowling';
type StatOption = string;

interface StatFilterDropdownProps {
  /** whether we’re on the batting or bowling screen */
  type: LeaderboardType;
  /** currently selected stat */
  selected: StatOption;
  /** user picks a stat */
  onSelect: (stat: StatOption) => void;
  /** switch between batting/bowling */
  onTypeChange: (t: LeaderboardType) => void;
}

const battingOptions: StatOption[] = [
  'Orange Cap',
  'Most Runs',
  'Best Average',
  'Best Strike Rate',
  'Most Fifties',
  'Most Hundreds',
];
const bowlingOptions: StatOption[] = [
  'Purple Cap',
  'Most Wickets',
  'Best Economy',
  'Best Average',
  'Best Strike Rate',
];

export default function StatFilterDropdown({
  type,
  selected,
  onSelect,
  onTypeChange,
}: StatFilterDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.selectorText}>{selected}</Text>
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <SafeAreaView style={styles.modalBg}>
          <View style={styles.modalCard}>
            {/* Radio Toggle */}
            <View style={styles.toggleRow}>
              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  type === 'batting' && styles.toggleBtnActive,
                ]}
                onPress={() => onTypeChange('batting')}
              >
                <Text
                  style={[
                    styles.toggleText,
                    type === 'batting' && styles.toggleTextActive,
                  ]}
                >
                  BATTERS
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  type === 'bowling' && styles.toggleBtnActive,
                ]}
                onPress={() => onTypeChange('bowling')}
              >
                <Text
                  style={[
                    styles.toggleText,
                    type === 'bowling' && styles.toggleTextActive,
                  ]}
                >
                  BOWLERS
                </Text>
              </TouchableOpacity>
            </View>

            {/* Options List */}
            <FlatList
              data={type === 'batting' ? battingOptions : bowlingOptions}
              keyExtractor={(item) => item}
              style={styles.optionList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    onSelect(item);
                    setOpen(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item === selected && styles.optionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setOpen(false)}
            >
              <Text style={styles.closeText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 6 },
  selector: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  selectorText: { fontSize: 14 },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  toggleRow: { flexDirection: 'row' },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  toggleBtnActive: { backgroundColor: '#eee' },
  toggleText: { fontSize: 14, color: '#555' },
  toggleTextActive: { fontWeight: 'bold', color: '#000' },
  optionList: { maxHeight: 300 },
  optionItem: { paddingVertical: 12, paddingHorizontal: 16 },
  optionText: { fontSize: 14, color: '#333' },
  optionTextSelected: { fontWeight: 'bold', color: '#000' },
  closeBtn: {
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  closeText: { color: '#007aff', fontWeight: '600' },
});
