// src/components/PlayerCell.tsx

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Player } from '../types/player';

interface PlayerCellProps {
  player: Player;
  onAdd: (p: Player) => void;
}

export default function PlayerCell({ player, onAdd }: PlayerCellProps) {
  // split name into initial + surname
  const parts = player.player_name.split(' ');
  const initial = parts[0]?.charAt(0) || '';
  const surname = parts.slice(1).join(' ') || parts[0];

  // assume you have a field on Player for "% selected"
  // if it's named differently, just swap in that property
  const pct = 78.89

  return (
    <View style={styles.cell}>
      {/* LEFT GROUP: avatar + name + % */}
      <View style={styles.leftGroup}>
        <Image source={{ uri: player.avatarUrl }} style={styles.avatar} />

        <View style={styles.textContainer}>
          <Text 
            style={styles.name} 
            numberOfLines={1} 
            ellipsizeMode="tail">
            {initial} {surname}
          </Text>
          <Text style={styles.percent}>
            {pct.toFixed(1)}%
          </Text>
        </View>
      </View>

      {/* RIGHT GROUP: + button  above  credit score */}
      <View style={styles.rightGroup}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAdd(player)}
        >
          <AntDesign name="pluscircleo" size={20} color="#0f0" />
        </TouchableOpacity>
        <Text style={styles.credit}>
          {player.credit_score?.toFixed(1) ?? '–'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // push leftGroup & rightGroup to edges
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  // avatar + texts
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 8,
    flexShrink: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    flexShrink: 1,
  },
  percent: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },

  // + button and credit
  rightGroup: {
    alignItems: 'center',
    width: 40,            // fixed width to keep both vertically aligned
  },
  addButton: {
    marginBottom: 4,
  },
  credit: {
    fontSize: 12,
    color: '#555',
  },
});
