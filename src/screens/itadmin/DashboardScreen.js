import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UsersContext } from '../../contexts/UsersContext';

export default function DashboardScreen({ navigation }) {
  const { users } = useContext(UsersContext);
  
  const officerCount = users.filter(user =>
    user.role === 'Officer' && user.status === 'Active'
  ).length;
  
  const opsCount = users.filter(user =>
    user.role === 'Ops' && user.status === 'Active'
  ).length;

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
          <Text style={styles.role}>IT Admin</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
            style={styles.logoutButton}
          >
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.label}>Total Active Loan Officers</Text>
            <Text style={styles.number}>{officerCount}</Text>
          </View>

          <View style={[styles.card, { marginLeft: 20 }]}>
            <Text style={styles.label}>Total Active Operations Manager</Text>
            <Text style={styles.number}>{opsCount}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserManagement')}>
          <Text style={styles.buttonText}>View List</Text>
        </TouchableOpacity>
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
    color: '#0066ff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
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
  },
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});