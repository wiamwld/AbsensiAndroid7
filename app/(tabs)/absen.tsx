import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function AbsensiScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.absenContainer}>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          value="MOH. ARDILAN"
          mode="outlined"
          style={styles.input}
          editable={false}
        />

        <Text style={styles.label}>Code ID</Text>
        <TextInput
          value="7263650"
          mode="outlined"
          style={styles.input}
          editable={false}
        />

        <Text style={styles.label}>Lokasi</Text>
        <TextInput
          value="-7.2078470921110421"
          mode="outlined"
          style={styles.input}
          editable={false}
        />

        <Text style={styles.label}>Ket.</Text>
        <TextInput
          value="16 Desember 2024, 07:13:27"
          mode="outlined"
          style={styles.input}
          editable={false}
        />

        <Button mode="contained" style={styles.absenButton}>
          SUDAH ABSEN
        </Button>
      </View>
      
      <View style={styles.navigation}>
        <Button icon="home" style={styles.navButton}>Home</Button>
        <Button icon="qrcode-scan" style={styles.navButton}>Absensi</Button>
        <Button icon="account" style={styles.navButton}>Profil</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingTop: 20,
  },
  absenContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000',
  },
  input: {
    marginBottom: 12,
  },
  absenButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#4CAF50',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
  },
});
