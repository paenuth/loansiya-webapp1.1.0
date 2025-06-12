import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function OpsClientProfileScreen({ route, navigation }) {
  const { clientId } = route.params;

  const clients = {
    '001': {
      name: 'John Doe',
      age: 26,
      cid: '001',
      email: 'johndoe@gmail.com',
      number: '+639123456789',
      address: '123 Mabini Street, Metro Manila, 1100, Philippines',
      financials: {
        income: '₱60,000',
        expenses: '₱25,000',
        savings: '₱150,000',
        ratio: '30%',
      },
      employment: {
        company: 'ABC Corporation',
        position: 'Software Developer',
      },
      documents: ['Valid Id', 'ORCR', 'Land Title', 'Deeds of Assignment', 'Signed Documents'],
    },
    // You can add more mock clients here
  };

  const client = clients[clientId];

  if (!client) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Client not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.logo}><Text style={{ color: '#0066ff' }}>Loan</Text>Siya</Text>
        <Text style={styles.role}>Operations Manager</Text>
        <Text style={styles.logout}>Logout</Text>
      </View>

      <View style={styles.content}>
        {/* Left Section */}
        <View style={styles.left}>
          <Text style={styles.sectionTitle}>Client Profile</Text>

          <Text style={styles.subTitle}>Personal Details</Text>
          <Text><Text style={styles.bold}>Name:</Text> {client.name}</Text>
          <Text><Text style={styles.bold}>Age:</Text> {client.age}</Text>
          <Text><Text style={styles.bold}>CID:</Text> {client.cid}</Text>
          <Text><Text style={styles.bold}>Email:</Text> {client.email}</Text>
          <Text><Text style={styles.bold}>Number:</Text> {client.number}</Text>
          <Text><Text style={styles.bold}>Address:</Text> {client.address}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Uploaded Document</Text>
          {client.documents.map((doc, index) => (
            <View key={index} style={styles.documentRow}>
              <Text>{doc}</Text>
              <TouchableOpacity style={styles.viewBtn}><Text>View</Text></TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Right Section */}
        <View style={styles.right}>
          <Text style={styles.sectionTitle}>Financial Record</Text>
          <Text>Monthly Income {client.financials.income}</Text>
          <Text>Monthly Expenses {client.financials.expenses}</Text>
          <Text>Saving and Assets {client.financials.savings}</Text>
          <Text>Debt to Income Ratio {client.financials.ratio}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Employment or Business info</Text>
          <Text>{client.employment.company}</Text>
          <Text>{client.employment.position}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Loan History</Text>
          <TouchableOpacity style={styles.viewBtn}>
            <Text>View</Text>
          </TouchableOpacity>

          {/* Back Button */}
          <TouchableOpacity
            style={[styles.viewBtn, { alignSelf: 'flex-start', marginTop: 20 }]}
            onPress={() => navigation.goBack()}
          >
            <Text>← Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
  },
  logout: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
  },
  left: {
    flex: 1.2,
    paddingRight: 15,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  right: {
    flex: 1,
    paddingLeft: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  documentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eaeaea',
    padding: 8,
    marginBottom: 5,
    borderRadius: 4,
  },
  viewBtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  error: {
    fontSize: 18,
    color: '#dc3545',
    textAlign: 'center',
    marginTop: 30,
  },
});
