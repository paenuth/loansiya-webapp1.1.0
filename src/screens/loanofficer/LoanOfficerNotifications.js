import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mockNotifications = [
  { cid: '001', status: 'approved' },
  { cid: '002', status: 'declined' },
  { cid: '003', status: 'declined' },
  { cid: '004', status: 'approved' },
  { cid: '005', status: 'approved' },
];

export default function LoanOfficerNotifications({ navigation }) {
  const renderItem = ({ item }) => {
    const isApproved = item.status === 'approved';

    return (
      <View style={styles.item}>
        <Text style={[styles.icon, { color: isApproved ? 'green' : 'red' }]}>
          {isApproved ? '✅' : '❌'}
        </Text>
        <Text style={styles.message}>
          CID <Text style={styles.bold}>{item.cid}</Text> LOAN REQUEST HAS BEEN{' '}
          <Text style={[styles.status, { color: isApproved ? 'green' : 'red' }]}>
            {item.status.toUpperCase()}
          </Text>{' '}
          BY THE OPERATIONAL MANAGER
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Header with Dashboard Button */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Hello Loan Officer!</Text>
        <TouchableOpacity
          style={styles.dashboardBtn}
          onPress={() => navigation.navigate('LoanOfficerDashboard')}
        >
          <Text style={styles.btnText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.subHeader}>Notifications</Text>

      {/* Notification List */}
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.cid}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dashboardBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 6,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    marginTop: 2,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },
  status: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 6,
  },
});
