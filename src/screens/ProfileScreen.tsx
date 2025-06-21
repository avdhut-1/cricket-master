import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function ProfileScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Dummy avatar
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3210</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Matches</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>#102</Text>
          <Text style={styles.statLabel}>Rank</Text>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editBtn}>
        <Icon name="create-outline" size={20} color="#fff" />
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Options */}
      <View style={styles.optionsList}>
        <ProfileOption icon="people" label="My Teams" />
        <ProfileOption icon="trophy" label="My Contests" />
        <ProfileOption icon="wallet" label="Wallet" />
        <ProfileOption icon="settings" label="Settings" />
        <ProfileOption icon="log-out" label="Logout" />
      </View>
    </ScrollView>
  );
};

const ProfileOption = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.optionItem}>
    <Icon name={icon} size={20} color="#555" />
    <Text style={styles.optionText}>{label}</Text>
    <Icon name="chevron-forward" size={18} color="#999" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  avatar: {
    width: 100, height: 100, borderRadius: 50, marginBottom: 10,
  },
  name: {
    fontSize: 22, fontWeight: '600', color: '#333',
  },
  email: {
    fontSize: 14, color: '#777',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18, fontWeight: 'bold', color: '#333',
  },
  statLabel: {
    fontSize: 12, color: '#777',
  },
  editBtn: {
    flexDirection: 'row',
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    marginHorizontal: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  editBtnText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  optionsList: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    paddingVertical: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});


