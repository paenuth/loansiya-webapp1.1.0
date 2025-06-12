import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './screens/auth/LoginScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';
import ITAdminDashboard from './screens/itadmin/DashboardScreen';
import OpsDashboard from './screens/ops/DashboardScreen';
import LoanOfficerDashboard from './screens/loanofficer/DashboardScreen';
import ClientListScreen from './screens/loanofficer/ClientListScreen';
import ClientProfileScreen from './screens/loanofficer/ClientProfileScreen';
import LoanPendingListScreen from './screens/loanofficer/LoanPendingListScreen';
import PendingLoanDetailScreen from './screens/loanofficer/PendingLoanDetailScreen';
import UserManagementScreen from './screens/itadmin/UserManagementScreen';
import AddEditUserScreen from './screens/itadmin/AddEditUserScreen';
import OpsClientListScreen from './screens/ops/OpsClientListScreen';
import OpsClientProfileScreen from './screens/ops/OpsClientProfileScreen';
import OpsPendingListScreen from './screens/ops/OpsPendingListScreen';
import OpsPendingLoanDetailScreen from './screens/ops/OpsPendingLoanDetailScreen';



// Contexts
import { AuthContext } from './contexts/AuthContext';
import { UsersContext } from './contexts/UsersContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { username: 'officer1', fullName: 'Maron Brown', role: 'Officer', status: 'Active' },
    { username: 'officer2', fullName: 'Vince Black', role: 'Officer', status: 'Active' },
    { username: 'officer3', fullName: 'Hane White', role: 'Ops', status: 'Active' },
    { username: 'officer4', fullName: 'Monke G', role: 'Officer', status: 'Disabled' },
  ]);

  const addUser = (newUser) => {
    setUsers(currentUsers => [...currentUsers, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(currentUsers =>
      currentUsers.map(user =>
        user.username === updatedUser.username ? updatedUser : user
      )
    );
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      setCurrentUser,
      resetPassword: async (username, newPassword) => {
        // In a real app, this would make an API call
        return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000));
      }
    }}>
      <UsersContext.Provider value={{ users, addUser, updateUser }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Dashboard" component={ITAdminDashboard} />
            <Stack.Screen name="OpsDashboard" component={OpsDashboard} />
            <Stack.Screen name="UserManagement" component={UserManagementScreen} />
            <Stack.Screen name="AddEditUser" component={AddEditUserScreen} />
            <Stack.Screen name="LoanOfficerDashboard" component={LoanOfficerDashboard} />
            <Stack.Screen name="ClientList" component={ClientListScreen} />
            <Stack.Screen name="ClientProfile" component={ClientProfileScreen} />
            <Stack.Screen name="LoanPendingList" component={LoanPendingListScreen} />
            <Stack.Screen name="PendingLoanDetail" component={PendingLoanDetailScreen} />
            <Stack.Screen name="OpsClientList" component={OpsClientListScreen} />
            <Stack.Screen name="OpsClientProfile" component={OpsClientProfileScreen} />
            <Stack.Screen name="OpsPendingList" component={OpsPendingListScreen} />
            <Stack.Screen name="OpsPendingLoanDetail" component={OpsPendingLoanDetailScreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </UsersContext.Provider>
    </AuthContext.Provider>
  );
}