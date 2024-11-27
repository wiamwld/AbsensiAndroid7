import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MOH. ARDILAN</Text>
      </View>

      {/* Menu Grid */}
      <View style={styles.menuGrid}>
        <MenuButton title="Jadwal Pelajaran" iconName="schedule" />
        <MenuButton title="Data Siswa" iconName="book" />
        <MenuButton title="Data Guru" iconName="book" />
        <MenuButton title="Kalender" iconName="calendar" />
        <MenuButton title="Nilai Siswa" iconName="checklist" />
        <MenuButton title="Pusat Bantuan" iconName="help" />
      </View>

      {/* School Contact */}
      <View style={styles.contactBox}>
        <Text style={styles.contactText}>081234567890</Text>
        <Text style={styles.contactLabel}>Nomor Sekolah</Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <FooterButton title="Home" />
        <FooterButton title="Absensi" />
        <FooterButton title="Profil" />
      </View>
    </View>
  );
}

function MenuButton({ title }) {
  return (
    <TouchableOpacity style={styles.menuButton}>
      {/* You can replace below with icons */}
      <View style={styles.menuIcon}></View>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
}

function FooterButton({ title }) {
  return (
    <TouchableOpacity style={styles.footerButton}>
      {/* Placeholder for footer icon */}
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
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuButton: {
    width: '40%',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginBottom: 10,
  },
  menuText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  contactBox: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  contactText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactLabel: {
    color: 'white',
    fontSize: 14,
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
