// components/SearchBar.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchbarProps } from "react-native-paper";

const SearchBar: React.FC<SearchbarProps> = ({ placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
    padding: 0,
    margin: 0,
  },
});

export default SearchBar;
