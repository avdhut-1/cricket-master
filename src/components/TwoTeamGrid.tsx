import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerCell from './PlayerCell';
import { Player } from '../types/player';

interface TwoTeamGridProps {
  leftTeam: Player[];
  rightTeam: Player[];
  onAdd: (p: Player) => void;
}

export default function TwoTeamGrid({
  leftTeam,
  rightTeam,
  onAdd,
}: TwoTeamGridProps) {
  // make an array of { left, right } pairs, filling undefined if uneven
  const maxLen = Math.max(leftTeam.length, rightTeam.length);
  const rows = Array.from({ length: maxLen }, (_, i) => ({
    left: leftTeam[i],
    right: rightTeam[i],
  }));

  return (
    <FlatList
      data={rows}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <View style={styles.half}>
            {item.left && <PlayerCell player={item.left} onAdd={onAdd}/>}
          </View>
          <View style={styles.divider} />
          <View style={styles.half}>
            {item.right && <PlayerCell player={item.right} onAdd={onAdd} />}
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  half: {
    width: '48%',
  },
  divider: {
    width: 1,
    backgroundColor: '#555',
    marginVertical: 8,
  },
});
