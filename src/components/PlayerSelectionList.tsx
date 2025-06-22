// src/components/PlayerSelectionList.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerCard from './PlayerCard';
import { Player } from '../types/player';

interface Props {
  data: Player[];
  onAdd: (p: Player) => void;
}

export default function PlayerSelectionList({ data, onAdd }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(p) => p.rank.toString()}
      renderItem={({ item }) => <PlayerCard player={item} onAdd={onAdd} />}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  sep: { height: 1, backgroundColor: '#eee' },
});
