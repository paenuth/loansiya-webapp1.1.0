import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function OpsPendingLoanDetailScreen({ navigation }) {
  // Simulated sample data
  const client = {
    name: 'John Doe',
    age: 26,
    cid: '001',
    email: 'johndoe@gmail.com',
    number: '+639123456789',
    address: '123 Mabini Street, Metro Manila, 1100, Philippines',
    documents: ['Valid Id', 'ORCR', 'Land Title', 'Deeds of Assignment', 'Signed Documents'],
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
    loan: {
      requested: '₱50,000',
      recommended: '₱100,000',
      rate: '5.0%',
      repayment: 'Monthly',
      creditScore: 720,
      risk: {
        payment: 'Fair',
        dti: '45%',
        overall: 'Moderate',
      },
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Topbar */}
      <View style={styles.topbar}>
        <Text style={styles.logo}><Text style={{ color: '#0066ff' }}>Loan</Text>Siya</Text>
        <Text style={styles.role}>Operations Manager</Text>
        <Text style={styles.logout}>Logout</Text>
      </View>

      {/* Body */}
      <View style={styles.content}>
        {/* LEFT SIDE */}
        <View style={styles.left}>
          <Text style={styles.sectionTitle}>Client Profile</Text>
          <Text style={styles.subTitle}>Personal Details</Text>
          <Text><Text style={styles.bold}>Name:</Text> {client.name}</Text>
          <Text><Text style={styles.bold}>Age:</Text> {client.age}</Text>
          <Text><Text style={styles.bold}>CID:</Text> {client.cid}</Text>
          <Text><Text style={styles.bold}>Email:</Text> {client.email}</Text>
          <Text><Text style={styles.bold}>Number:</Text> {client.number}</Text>
          <Text><Text style={styles.bold}>Address:</Text> {client.address}</Text>

          <Text style={[styles.subTitle, { marginTop: 16 }]}>Uploaded Document</Text>
          {client.documents.map((doc, i) => (
            <View key={i} style={styles.documentRow}>
              <Text>{doc}</Text>
              <TouchableOpacity style={styles.viewBtn}><Text>View</Text></TouchableOpacity>
            </View>
          ))}
        </View>

        {/* RIGHT SIDE */}
        <View style={styles.right}>
          <Text style={styles.sectionTitle}>Financial Record</Text>
          <Text>Monthly Income {client.financials.income}</Text>
          <Text>Monthly Expenses {client.financials.expenses}</Text>
          <Text>Saving and Assets {client.financials.savings}</Text>
          <Text>Debt to Income Ratio {client.financials.ratio}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Employment or Business info</Text>
          <Text>{client.employment.company}</Text>
          <Text>{client.employment.position}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Loan History</Text>
          <TouchableOpacity style={styles.viewBtn}><Text>View</Text></TouchableOpacity>

          {/* Loan Evaluation Box */}
          <View style={styles.loanBox}>
            <Text style={styles.bold}>Borrower Request</Text>
            <Text>{client.loan.requested}</Text>
            <Text style={styles.bold}>Recommended Loan Amount</Text>
            <Text>{client.loan.recommended}</Text>
            <Text><Text style={styles.bold}>Interest Rate:</Text> {client.loan.rate}</Text>
            <Text><Text style={styles.bold}>Repayment Method:</Text> {client.loan.repayment}</Text>
          </View>

          {/* Credit & Risk */}
          <View style={styles.creditBox}>
            <Text style={styles.bold}>Credit Score</Text>
            <Text style={styles.score}>{client.loan.creditScore}</Text>
            <Text style={[styles.bold, { marginTop: 10 }]}>Risk Assessment</Text>
            <Text>Payment History: {client.loan.risk.payment}</Text>
            <Text>Debt-to-Income Ratio: {client.loan.risk.dti}</Text>
            <Text>Overall Creditworthiness: {client.loan.risk.overall}</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Text>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editBtn} onPress={() => alert('Edit flow')}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.declineBtn} onPress={() => alert('Declined')}>
              <Text style={{ color: '#fff' }}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.approveBtn} onPress={() => alert('Approved')}>
              <Text style={{ color: '#fff' }}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f6f6f6', flex: 1 },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
  },
  logo: { fontSize: 22, fontWeight: 'bold' },
  role: { fontSize: 14 },
  logout: { fontWeight: 'bold', fontSize: 14 },
  content: { flexDirection: 'row', padding: 20 },
  left: {
    flex: 1.1,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  right: {
    flex: 1.3,
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
  loanBox: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
  },
  creditBox: {
    backgroundColor: '#e8e8e8',
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  editBtn: {
    backgroundColor: '#bbb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  declineBtn: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  approveBtn: {
    backgroundColor: '#2ecc71',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
