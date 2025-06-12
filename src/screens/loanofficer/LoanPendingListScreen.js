import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const mockLoans = [
  { cid: '001', name: 'Justin Brown', status: 'Pending', updated: 'June 10, 2025 12:00pm' },
  { cid: '002', name: 'Lebron Black', status: 'Declined', updated: 'June 11, 2025 11:00am' },
  { cid: '003', name: 'James White', status: 'Approved', updated: 'June 12, 2025 9:45am' },
  { cid: '004', name: 'Monke de lufe', status: 'Approved', updated: 'June 12, 2025 10:45am' },
];

const statuses = ['ALL', 'Pending', 'Approved', 'Declined'];

export default function LoanPendingListScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  const filteredLoans = mockLoans.filter((loan) => {
    const matchesSearch =
      loan.name.toLowerCase().includes(search.toLowerCase()) ||
      loan.cid.includes(search);

    const matchesFilter = filter === 'ALL' || loan.status === filter;

    return matchesSearch && matchesFilter;
  });

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.cid}</Text>
      <Text style={[styles.cell, { flex: 3 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.status}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.updated}</Text>
      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => navigation.navigate('PendingLoanDetail')}
      >
        <Text>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>List of Pending Loan Approval</Text>
        <TouchableOpacity
          style={styles.dashboardBtn}
          onPress={() => navigation.navigate('LoanOfficerDashboard')}
        >
          <Text style={styles.btnText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Search + Filter */}
      <View style={styles.searchFilterRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.filter}>
          <Text style={styles.filterLabel}>Filter:</Text>
          {statuses.map((status) => (
            <Pressable
              key={status}
              style={[
                styles.filterOption,
                filter === status && styles.activeFilter,
              ]}
              onPress={() => setFilter(status)}
            >
              <Text>{status}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Table Headers */}
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 1 }]}>CID</Text>
        <Text style={[styles.headerCell, { flex: 3 }]}>Full Name</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Loan Status</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Date Update</Text>
        <Text style={[styles.headerCell, { flex: 1 }]}></Text>
      </View>

      {/* List */}
      <FlatList
        data={filteredLoans}
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
  header: {
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
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  searchFilterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  searchInput: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    flex: 1,
    minWidth: 150,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterLabel: {
    fontWeight: '600',
  },
  filterOption: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  activeFilter: {
    backgroundColor: '#ccc',
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
