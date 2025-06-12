import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoanOfficerDashboard({ navigation }) {
  const totalLoanClients = 3;
  const totalLoanPending = 4;

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topbar}>
        <Text style={styles.logo}>
          <Text style={{ color: '#0066ff' }}>Loan</Text>Siya
        </Text>
        <Text style={styles.page}>Dashboard</Text>
        <View style={styles.right}>
          <Text style={styles.role}>Loan Officer</Text>

          <TouchableOpacity onPress={() => navigation.navigate('LoanOfficerNotifications')}>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard Content */}
      <View style={styles.content}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.label}>Total Loan Client</Text>
            <Text style={styles.number}>{totalLoanClients}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClientList')}>
                 <Text style={styles.buttonText}>View List</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Total Loan Pending</Text>
            <Text style={styles.number}>{totalLoanPending}</Text>
           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanPendingList')}>
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
    padding: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  page: {
    fontSize: 16,
    fontWeight: '600',
  },
  right: {
    flexDirection: 'row',
    gap: 10,
  },
  role: {
    fontSize: 14,
    marginRight: 10,
  },
  logout: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  icon: {
  fontSize: 18,
  marginRight: 10,
},

  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    backgroundColor: '#e2e2e2',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 12,
    width: 160,
    alignItems: 'center',
    marginHorizontal: 10,
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
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
