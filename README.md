# Setup Instructions for LoanSiya IT Admin Web App

## Installation Steps

### 1. Clone the repository
```bash
git clone <your-repo-url>
```
### 3. Navigate into the project folder
```bash
cd loansiya-webapp1
```

### 3.1 Install Expo CLI globally
```bash
npm install -g expo-cli
```

### 4. Install web support dependencies
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

### 5. Install React Navigation for multi-page support
```bash
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

### 6. (Optional) Install dropdown picker support
```bash
npm install @react-native-picker/picker
```

## Running the Application

To run the web application:
```bash
npx expo start --web
```

This will start the development server and open the application in your default web browser.

June 10, 2025 12PM Directory Update

src/
├── assets/              		# Images and icons
├── components/
│   └── shared/                 # Shared components
├── contexts/           	    # React contexts
│   ├── AuthContext.js
│   └── UsersContext.js
├── screens/
│   ├── auth/          			    # Authentication screens
│   │   └── LoginScreen.js
│   ├── itadmin/      		 	    # IT Admin screens
│   │   ├── DashboardScreen.js
│   │   ├── UserManagementScreen.js
│   │   └── AddEditUserScreen.js
│   └── ops/           			    # Operations Manager screens
│       └── DashboardScreen.js
├── styles/             			# Shared styles
├── utils/            				# Utility functions
├── App.js           				# Main app component
├── index.js         				# Entry point
├── app.json         				# Expo config
└── package.json     				# Dependencies
