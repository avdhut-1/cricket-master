import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import BannerCarousel from '../components/BannerCarousel';
import MatchCardCarousel, { MatchInfo } from '../components/MatchCardCarousel';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'MatchDayContest'>;

export default function ContestScreen() {
  const navigation = useNavigation<NavProp>();

  const banners = [
    'https://i.pravatar.cc/600?img=5',
    'https://i.pravatar.cc/600?img=6',
    'https://i.pravatar.cc/600?img=7',
  ];

  const upcoming: MatchInfo[] = [
    {
      id: '1',
      teamA: { name: 'India', logo: 'https://i.pravatar.cc/48?img=8' },
      teamB: { name: 'Australia', logo: 'https://i.pravatar.cc/48?img=9' },
      time: 'Today • 7:00 PM',
      ground: 'KPC Stadium',
      insights: [
        'Avg 1st-inn: 113 in last 10 matches',
        'Avg 2nd-inn: 94 in last 10 matches',
        'Gautam Raju – top wicket-taker for India',
        'Rohit Sharma – most runs at KPC',
        'Avg 1st-inn: 113 in last 10 matches',
        'Avg 1st-inn: 113 in last 10 matches',
      ],
    },
    // …more matches…
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Banner with just 8px below */}
      <View style={styles.bannerWrapper}>
        <BannerCarousel images={banners} />
      </View>

      {/* Section title */}
      <Text style={styles.sectionHeader}>Upcoming Contests</Text>

      {/* Match cards with a little inset on the sides and bottom */}
      <View style={styles.matchWrapper}>
        <MatchCardCarousel
          data={upcoming}
          onJoin={() => navigation.navigate('MatchDayContest')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  bannerWrapper: {
    marginTop: 16,
    marginBottom: 12,    // tighter space
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 8,
    color: '#333',
  },
  matchWrapper: {
    marginTop: 0,
    paddingHorizontal: 16,
    paddingBottom: 24,  // some breathing room at bottom
  },
});
