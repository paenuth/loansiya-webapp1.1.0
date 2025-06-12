import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OpsDashboardScreen({ navigation }) {
  const totalClients = 4;
  const totalPending = 4;

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topbar}>
        <View style={styles.leftSection}>
          <Text style={styles.brand}>
            <Text style={{ color: '#0066ff' }}>Loan</Text>Siya
          </Text>
          <Text style={styles.title}>Dashboard</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.role}>Operations Manager</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
            style={styles.logoutButton}
          >
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard Content */}
      <View style={styles.content}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.label}>Total Loan Clients</Text>
            <Text style={styles.number}>{totalClients}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('OpsClientList')}

            >
              <Text style={styles.buttonText}>View List</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Total Loan Pending</Text>
            <Text style={styles.number}>{totalPending}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('OpsPendingList')}

            >
              <Text style={styles.buttonText}>View List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  brand: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  role: {
    fontSize: 16,
  },
  logoutButton: {
    padding: 8,
  },
  logout: {
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    gap: 20,
  },
  card: {
    backgroundColor: '#e2e2e2',
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: 180,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
