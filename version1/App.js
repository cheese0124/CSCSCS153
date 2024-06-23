import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your screens
import HomePage from './components/HomeScreen';
import MoneyExpensePage from './components/MoneyExpensePage';
import AboutScreen from './components/AboutScreen';
import SettingsScreen from './components/SettingScreen';
import StartScreen from './components/BeginScreen';
import AccountNamePage from './components/AccountNamePage';
import RecordSavingsPage from './components/RecordSavings';
import CheckReportPage from './components/CheckReport';
import CheckGardenPage from './components/CheckGarden';
import SelectMonthPage from './components/ChooseMonth';
import MonthlyExpenseReport from './components/MonthlyExpenseReport';
import AnimatedBeginScreen from './components/BeginScreen'; // Add AnimatedBeginScreen
import TotalExpenseReport from './components/TotalExpenseReport'; // Add TotalExpenseReport

// Import Context Providers
import { AccountProvider } from './components/AccountContext';
import { ValueProvider } from './components/ValueContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'About') {
            iconName = 'information-circle';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    // Check for account name in storage and decide the initial route
    const checkAccountName = async () => {
      try {
        const accountName = await AsyncStorage.getItem('accountName');
        setInitialRoute(accountName ? 'Main' : 'AnimatedBegin');
      } catch (error) {
        console.error('Failed to check account name from storage', error);
      }
    };

    checkAccountName();
  }, []);

  if (initialRoute === null) {
    // You can render a loading indicator while determining the initial route
    return null;
  }

  return (
    <AccountProvider>
      <ValueProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="AnimatedBegin"
              component={AnimatedBeginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountName"
              component={AccountNamePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecordExpense"
              component={MoneyExpensePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecordSavings"
              component={RecordSavingsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckReport"
              component={CheckReportPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckGarden"
              component={CheckGardenPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectMonthPage"
              component={SelectMonthPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MonthlyExpenseReport"
              component={MonthlyExpenseReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TotalExpense"
              component={TotalExpenseReport}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ValueProvider>
    </AccountProvider>
  );
}

export default App;