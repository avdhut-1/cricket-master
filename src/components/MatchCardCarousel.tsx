import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');
const H_PAD = 16 * 2;               // ContestScreen padding*2
const CARD_W = width - H_PAD;

export type MatchInfo = {
  id: string;
  teamA: { name: string; logo: string };
  teamB: { name: string; logo: string };
  time: string;
  ground: string;
  insights: string[];
};

interface Props {
  data: MatchInfo[];
  onJoin: (m: MatchInfo) => void;
}

export default function MatchCardCarousel({ data, onJoin }: Props) {
  const ref = useRef<FlatList<MatchInfo>>(null);
  const [current, setCurrent] = useState(0);

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={m => m.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Teams row */}
            <View style={styles.teamsRow}>
              <View style={styles.team}>
                <Image source={{ uri: item.teamA.logo }} style={styles.logo}/>
                <Text style={styles.teamName}>{item.teamA.name}</Text>
              </View>
              <Text style={styles.vs}>vs</Text>
              <View style={styles.team}>
                <Image source={{ uri: item.teamB.logo }} style={styles.logo}/>
                <Text style={styles.teamName}>{item.teamB.name}</Text>
              </View>
            </View>

            {/* Time & Ground */}
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.ground}>{item.ground}</Text>

            {/* Styled Quick Insights */}
            {item.insights.map((ins, i) => (
              <View style={styles.insightRow} key={i}>
                <View style={styles.bullet}/>
                <Text style={styles.insightText}>{ins}</Text>
              </View>
            ))}

            {/* JOIN button */}
            <TouchableOpacity style={styles.joinButton} onPress={() => onJoin(item)}>
              <Text style={styles.joinText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        )}
        onMomentumScrollEnd={ev => {
          const idx = Math.round(ev.nativeEvent.contentOffset.x / CARD_W);
          setCurrent(idx);
        }}
      />

      {/* Dot indicators */}
      <View style={styles.dots}>
        {data.map((_, i) => (
          <View key={i} style={[styles.dot, i === current && styles.dotActive]}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { },
  card: {
    width: CARD_W,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 0,
    elevation: 2,
    alignSelf: 'center',
  },

  teamsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  team: { flex: 1, alignItems: 'center' },
  logo: { width: 100, height: 100, borderRadius:50, marginBottom: 4, resizeMode: 'contain' },
  teamName: { fontSize: 20, fontWeight: '600' },
  vs: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 8 },

  time: { fontSize: 14, color: '#555', textAlign: 'center' },
  ground: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 12 },

  // insight bullet + text row
  insightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ff7f50',
    marginTop: 6,
    marginRight: 8,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 16,
  },

  joinButton: {
    marginTop: 16,
    backgroundColor: '#ff7f50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinText: { color: '#fff', fontWeight: '600', fontSize: 14 },

  // dots below
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: '#333' },
});
