import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profilePicture}>
          {/* Placeholder Foto Profil */}
          <View style={styles.profileIcon}></View>
        </View>
        <Text style={styles.editProfileText}>Edit Profil</Text>
        <Text style={styles.profileName}>MOH. ARDILAN</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuOptions}>
        <ProfileButton title="ID User" />
        <ProfileButton title="Ganti Password" />
        <ProfileButton title="Alamat Saya" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <FooterButton title="Home" />
        <FooterButton title="Absensi" />
        <FooterButton title="Profil" />
      </View>
    </View>
  );
}

function ProfileButton({ title }) {
  return (
    <TouchableOpacity style={styles.profileButton}>
      <Text style={styles.profileButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function FooterButton({ title }) {
  return (
    <TouchableOpacity style={styles.footerButton}>
      <View style={styles.footerIcon}></View>
      <Text style={styles.footerText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#4CAF50',
  },
  profilePicture: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
  },
  editProfileText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  menuOptions: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  profileButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#FF3B30',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 5,
  },
  footerText: {
    color: 'white',
    fontSize: 12,
  },
});
