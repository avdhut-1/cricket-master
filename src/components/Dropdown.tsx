import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const Dropdown = ({ label, options, selectedValue, onValueChange }: DropdownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.compactSelector}>
        <Text style={styles.compactText}>{label} ▼</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item);
                    setVisible(false);
                  }}
                >
                  <Text style={item === selectedValue ? styles.selectedOptionText : undefined}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  compactSelector: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  compactText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#007aff",
  },
});

export default Dropdown;
