import React from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

interface LeaderboardHeaderProps {
  season: string;
  setSeason: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const LeaderboardHeader: React.FC<LeaderboardHeaderProps> = ({
  season,
  setSeason,
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View style={styles.container}>
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
          options={["Most Runs", "Average", "Strike Rate"]}
          selectedValue={filter}
          onValueChange={setFilter}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 0,
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
    alignItems: "center"
  },
  searchBar: {
    flex: 1,
  },
});

export default LeaderboardHeader;
