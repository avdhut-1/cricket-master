import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

type LeaderboardType = 'batting' | 'bowling';

interface LeaderboardHeaderProps {
  season: string;
  setSeason: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  type: LeaderboardType;
}

const LeaderboardHeader: React.FC<LeaderboardHeaderProps> = ({
  season,
  setSeason,
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
  type,
}) => {
  return (
    <>
      <View style={styles.topControls}>
        <View style={styles.left}>
          <SearchBar
            placeholder="Search player"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.right}>
          <Dropdown
            label="Filter"
            options={
              type === "batting"
                ? ["Most Runs", "Average", "Strike Rate"]
                : ["Most Wickets", "Economy", "Strike Rate"]
            }
            selectedValue={filter}
            onValueChange={setFilter}
          />
        </View>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>#</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>M</Text>
        {type === "batting" ? (
          <>
            <Text style={styles.headerCell}>R</Text>
            <Text style={styles.headerCell}>Avg</Text>
          </>
        ) : (
          <>
            <Text style={styles.headerCell}>W</Text>
            <Text style={styles.headerCell}>Eco</Text>
          </>
        )}
        <Text style={styles.headerCell}>S/R</Text>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  topControls: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    marginRight: 6,
  },
  right: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f5f5f5",
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 13,
  },
});


export default LeaderboardHeader;
