import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ClientProfileScreen({ route, navigation }) {
  // Get the clientId from navigation params
  const { clientId } = route.params;

  // Mock client data mapping
  const mockClients = {
    '001': {
      name: 'Justin Brown',
      age: 26,
      cid: '001',
      email: 'justin.brown@gmail.com',
      number: '+6309123456789',
      address: '123 Mabini Street,\nMetro Manila, 1100, Philippines',
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
      documents: [
        'Valid Id',
        'ORCR',
        'Land Title',
        'Deeds of Assignment',
        'Signed Documents',
      ],
    },
    '002': {
      name: 'Lebron Black',
      age: 32,
      cid: '002',
      email: 'lebron.black@gmail.com',
      number: '+6309187654321',
      address: '456 Rizal Avenue,\nMetro Manila, 1200, Philippines',
      financials: {
        income: '₱85,000',
        expenses: '₱35,000',
        savings: '₱250,000',
        ratio: '25%',
      },
      employment: {
        company: 'XYZ Industries',
        position: 'Senior Manager',
      },
      documents: [
        'Valid Id',
        'Land Title',
        'Business Permit',
        'Signed Documents',
      ],
    },
    '003': {
      name: 'James White',
      age: 28,
      cid: '003',
      email: 'james.white@gmail.com',
      number: '+6309134567890',
      address: '789 Quezon Street,\nMetro Manila, 1300, Philippines',
      financials: {
        income: '₱45,000',
        expenses: '₱20,000',
        savings: '₱100,000',
        ratio: '35%',
      },
      employment: {
        company: 'DEF Solutions',
        position: 'Business Analyst',
      },
      documents: [
        'Valid Id',
        'Employment Certificate',
        'Bank Statement',
        'Signed Documents',
      ],
    },
    '004': {
      name: 'Monke de lufe',
      age: 30,
      cid: '004',
      email: 'monke.delufe@gmail.com',
      number: '+6309145678901',
      address: '321 Luna Street,\nMetro Manila, 1400, Philippines',
      financials: {
        income: '₱70,000',
        expenses: '₱30,000',
        savings: '₱180,000',
        ratio: '28%',
      },
      employment: {
        company: 'GHI Enterprises',
        position: 'Marketing Director',
      },
      documents: [
        'Valid Id',
        'Income Tax Return',
        'Property Documents',
        'Signed Documents',
      ],
    },
  };

  // Get client data based on ID
  const client = mockClients[clientId];

  if (!client) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Client not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Topbar */}
      <View style={styles.topbar}>
        <View style={styles.leftSection}>
        
          <Text style={styles.logo}><Text style={{ color: '#0066ff' }}>Loan</Text>Siya</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.role}>Loan Officer</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Left side */}
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
              <Text style={styles.docText}>{doc}</Text>
              <TouchableOpacity style={styles.viewBtn}>
                <Text>View</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Right side */}
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
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
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
    marginRight: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  right: {
    flex: 1,
    paddingLeft: 10,
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
  docText: {
    flex: 1,
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
    marginTop: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  backButton: {
    color: '#0066ff',
    fontSize: 16,
    fontWeight: '500',
  },
});
