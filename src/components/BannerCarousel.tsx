// src/components/BannerCarousel.tsx

import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');
// MatchCardCarousel uses 16px horizontal padding each side,
// so its card width = screen width − 32
const HORIZONTAL_PADDING = 16 * 2;
const CARD_WIDTH = width - HORIZONTAL_PADDING;
const CARD_MARGIN = 16; // space between cards

interface BannerCarouselProps {
  images: string[];
  autoScrollInterval?: number;
}

export default function BannerCarousel({
  images,
  autoScrollInterval = 4000,
}: BannerCarouselProps) {
  const ref = useRef<FlatList<string>>(null);
  const [current, setCurrent] = useState(0);

  // Auto‐advance
  useEffect(() => {
    const id = setInterval(() => {
      const next = (current + 1) % images.length;
      setCurrent(next);
      ref.current?.scrollToOffset({
        offset: next * (CARD_WIDTH + CARD_MARGIN),
        animated: true,
      });
    }, autoScrollInterval);
    return () => clearInterval(id);
  }, [current, images.length, autoScrollInterval]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_MARGIN}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: 16,  // half of your matchWrapper padding
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        onMomentumScrollEnd={ev => {
          const idx = Math.round(
            ev.nativeEvent.contentOffset.x / (CARD_WIDTH + CARD_MARGIN)
          );
          setCurrent(idx);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_MARGIN,
    borderRadius: 12,
    overflow: 'hidden',     // ensure the image respects rounded corners
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
