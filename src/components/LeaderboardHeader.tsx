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
      <SearchBar
        placeholder="Search player"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Dropdown
        label="Season"
        options={["2022", "2023", "2024"]}
        selectedValue={season}
        onValueChange={setSeason}
      />
      <Dropdown
        label="Filter"
        options={["Most Runs", "Average", "Strike Rate"]}
        selectedValue={filter}
        onValueChange={setFilter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },
});

export default LeaderboardHeader;
