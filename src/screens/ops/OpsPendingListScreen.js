import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mockPendingLoans = [
  { cid: '001', name: 'Justin Brown', status: 'Pending', date: 'June 10, 2025 11:30am' },
  { cid: '002', name: 'Lebron Black', status: 'Pending', date: 'June 11, 2025 10:30am' },
  { cid: '003', name: 'James White', status: 'Pending', date: 'June 12, 2025 9:15am' },
  { cid: '004', name: 'Monke de lufe', status: 'Pending', date: 'June 12, 2025 9:45am' },
];

export default function OpsPendingListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filtered = mockPendingLoans.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.cid.includes(search)
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.cid}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.status}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.date}</Text>
      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => navigation.navigate('OpsPendingLoanDetail', { client: item })}

      >
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>List of Pending Loan Approval</Text>
        <TouchableOpacity
          style={styles.dashboardBtn}
          onPress={() => navigation.navigate('OpsDashboard')}
        >
          <Text style={styles.btnText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 1 }]}>CID</Text>
        <Text style={[styles.headerCell, { flex: 3 }]}>Full Name</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Loan Status</Text>
        <Text style={[styles.headerCell, { flex: 3 }]}>Date Update</Text>
        <Text style={[styles.headerCell, { flex: 1 }]}></Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.cid}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dashboardBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    flex: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginBottom: 4,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  cell: {
    paddingHorizontal: 6,
  },
  viewBtn: {
    backgroundColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
