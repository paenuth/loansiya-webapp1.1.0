import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { UsersContext } from '../../contexts/UsersContext';

export default function AddEditUserScreen({ route, navigation }) {
  const { user } = route.params || {};
  const { addUser, updateUser } = useContext(UsersContext);

  const [formData, setFormData] = useState({
    username: user?.username || '',
    fullName: user?.fullName || '',
    role: user?.role || 'Officer',
    status: user?.status || 'Active',
    password: '',
    confirmPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleSave = () => {
    if (!formData.username || !formData.fullName) {
      alert('Please fill in all required fields');
      return;
    }

    if (!user && (!formData.password || !formData.confirmPassword)) {
      alert('Password is required for new users');
      return;
    }

    if (!user && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (user && formData.newPassword) {
      if (!formData.confirmNewPassword) {
        alert('Please confirm the new password');
        return;
      }
      if (formData.newPassword !== formData.confirmNewPassword) {
        alert('New passwords do not match');
        return;
      }
    }

    const userData = {
      ...formData,
      password: user ? (formData.newPassword || undefined) : formData.password,
    };

    // Remove unnecessary fields before saving
    delete userData.confirmPassword;
    delete userData.newPassword;
    delete userData.confirmNewPassword;

    if (user) {
      updateUser(userData);
    } else {
      addUser(userData);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topbar}>
        <View style={styles.leftSection}>
          <Text style={styles.brand}>
            <Text style={{ color: '#0066ff' }}>Loan</Text>Siya
          </Text>
          <Text style={styles.title}>{user ? 'Edit User' : 'Add User'}</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>Back to List</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={formData.fullName}
            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
            placeholder="Enter full name"
          />

          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={formData.username}
            onChangeText={(text) => setFormData({ ...formData, username: text })}
            placeholder="Enter username"
            editable={!user} // Username can't be edited for existing users
          />

          <Text style={styles.label}>Role</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData.role}
              onValueChange={(value) => setFormData({ ...formData, role: value })}
            >
              <Picker.Item label="Loan Officer" value="Officer" />
              <Picker.Item label="Operations Manager" value="Ops" />
            </Picker>
          </View>

          {user && (
            <>
              <Text style={styles.label}>Status</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.status}
                  onValueChange={(value) => setFormData({ ...formData, status: value })}
                >
                  <Picker.Item label="Active" value="Active" />
                  <Picker.Item label="Disabled" value="Disabled" />
                </Picker>
              </View>

              <View style={styles.passwordSection}>
                <Text style={styles.sectionTitle}>Change Password</Text>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  value={formData.newPassword}
                  onChangeText={(text) => setFormData({ ...formData, newPassword: text })}
                  placeholder="Enter new password (optional)"
                />

                <Text style={styles.label}>Confirm New Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  value={formData.confirmNewPassword}
                  onChangeText={(text) => setFormData({ ...formData, confirmNewPassword: text })}
                  placeholder="Confirm new password"
                />
              </View>
            </>
          )}

          {!user && (
            <>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                placeholder="Enter password"
              />

              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                placeholder="Confirm password"
              />
            </>
          )}


          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save User</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  brand: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  backButton: {
    color: '#0066ff',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 20,
    overflow: 'auto',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
    overflow: 'visible',
    minHeight: 'min-content',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    marginBottom: 16,
    overflow: 'hidden',
  },
  saveButton: {
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordSection: {
    marginTop: 16,
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
});