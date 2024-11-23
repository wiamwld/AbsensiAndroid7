import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const HomeScreen = ({  }) => {
  const features = [
    { id: '1', title: 'Profile', icon: 'https://via.placeholder.com/50', route: 'Profile' },
    { id: '2', title: 'Settings', icon: 'https://via.placeholder.com/50', route: 'Settings' },
    { id: '3', title: 'About', icon: 'https://via.placeholder.com/50', route: 'About' },
  ];

  const handleNavigate = () => {

  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, User!</Text>
        <Text style={styles.subtitle}>Explore your options below:</Text>
      </View>

      {/* Feature List */}
      <FlatList
        data={features}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.featureButton}
            onPress={() => handleNavigate()}
          >
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.featureText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.featureList}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Quick Action Button */}
      <TouchableOpacity style={styles.quickButton}>
        <Text style={styles.quickButtonText}>Quick Action</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  featureList: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  featureButton: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
  },
  quickButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  quickButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
