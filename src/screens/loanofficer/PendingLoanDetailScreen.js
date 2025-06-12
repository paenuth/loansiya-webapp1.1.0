import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function PendingLoanDetailScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topbar}>
        <Text style={styles.logo}><Text style={{ color: '#0066ff' }}>Loan</Text>Siya</Text>
        <Text style={styles.role}>Loan Officer</Text>
        <Text style={styles.logout}>Logout</Text>
      </View>

      <View style={styles.content}>
        {/* LEFT SIDE */}
        <View style={styles.left}>
          <Text style={styles.sectionTitle}>Client Profile</Text>
          <Text style={styles.subTitle}>Personal Details</Text>
          <Text><Text style={styles.bold}>Name:</Text> John Doe</Text>
          <Text><Text style={styles.bold}>Age:</Text> 26</Text>
          <Text><Text style={styles.bold}>CID:</Text> 001</Text>
          <Text><Text style={styles.bold}>Email:</Text> Johndoe@gmail.com</Text>
          <Text><Text style={styles.bold}>Number:</Text> +639123456789</Text>
          <Text><Text style={styles.bold}>Address:</Text> 123 Mabini Street, Metro Manila, 1100, Philippines</Text>

          <Text style={[styles.subTitle, { marginTop: 12 }]}>Uploaded Document</Text>
          {['Valid Id', 'ORCR', 'Land Title', 'Deeds of Assignment', 'Signed Documents'].map((doc, i) => (
            <View key={i} style={styles.documentRow}>
              <Text style={styles.docText}>{doc}</Text>
              <TouchableOpacity style={styles.viewBtn}><Text>View</Text></TouchableOpacity>
            </View>
          ))}
        </View>

        {/* RIGHT SIDE */}
        <View style={styles.right}>
          <Text style={styles.subTitle}>Financial Record</Text>
          <Text>Monthly Income ₱60,000</Text>
          <Text>Monthly Expenses ₱25,000</Text>
          <Text>Saving and Assets ₱150,000</Text>
          <Text>Debt to Income Ratio 30%</Text>

          <Text style={[styles.subTitle, { marginTop: 16 }]}>Employment or Business info</Text>
          <Text>ABC Corporation</Text>
          <Text>Software Developer</Text>

          <Text style={[styles.subTitle, { marginTop: 16 }]}>Loan History</Text>
          <TouchableOpacity style={styles.viewBtn}><Text>View</Text></TouchableOpacity>

          <View style={styles.loanDetails}>
            <Text style={styles.subTitle}>Borrower Request</Text>
            <Text>₱50,000</Text>
            <Text style={styles.subTitle}>Recommended Loan Amount</Text>
            <Text>₱100,000</Text>
            <Text><Text style={styles.bold}>Interest Rate:</Text> 5.0%</Text>
            <Text><Text style={styles.bold}>Repayment Method:</Text> Monthly</Text>
            <Text style={{ marginTop: 8, fontWeight: 'bold' }}>APPROVED BY OPERATION MANAGER ON YYYY/MM/DD</Text>
          </View>

          <View style={styles.creditBox}>
            <Text style={[styles.subTitle, { marginBottom: 4 }]}>Credit Score</Text>
            <Text style={styles.creditScore}>720</Text> {/* Placeholder */}
            <Text style={[styles.subTitle, { marginTop: 12 }]}>Risk Assessment</Text>
            <Text>Payment History: Fair</Text>
            <Text>Debt-to-Income Ratio: 45%</Text>
            <Text>Overall Creditworthiness: Moderate</Text>
          </View>

          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f6f6f6', flex: 1 },
  topbar: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: { fontSize: 22, fontWeight: 'bold' },
  role: { fontSize: 14 },
  logout: { fontWeight: 'bold', fontSize: 14 },
  content: { flexDirection: 'row', padding: 20 },
  left: {
    flex: 1,
    marginRight: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  right: {
    flex: 1.2,
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
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  documentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eaeaea',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  docText: {
    fontSize: 13,
    color: '#333',
  },
  viewBtn: {
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  loanDetails: {
    marginTop: 20,
  },
  creditBox: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  creditScore: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  backBtn: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  backText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
