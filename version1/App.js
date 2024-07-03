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
import PieChartPage from './components/PieChartPage';
import BarChartPage from './components/BarChartPage';
import TagSelectionPage from './components/TagSelectionPage';
import CustomTagPage from './components/CustomTagPage';
import TotalExpenseReport from './components/TotalExpenseReport'; // Add TotalExpenseReport
import YearlyBarChartPage from './components/YearlyBarChartPage';
import YearlyPieChartPage from './components/YearlyPieChartPage';
import SavingsSuggestionsPage from './components/SavingsSuggestionsPage';
import GoalPage from './components/GoalPage';
import SavingsPage from './components/SavingsPage';
import SavingsDetail from './components/SavingsDetail';
import SavingsPlanList from './components/SavingsPlanList';
import TotalSavingsReport from './components/TotalSavingsReport';
import AppAbout from './components/AppAbout';
import Setup from './components/Setup';
import RankingsScreen from './components/RankingScreen';
import BeachScreen from './components/BeachScreen';
// Import Context Providers
import { AccountProvider } from './components/AccountContext';
import { ValueProvider } from './components/ValueContext';
import { TagProvider } from './components/TagContext';
import { GoalProvider } from './components/GoalContext';
import SettingScreen from './components/SettingScreen';
import ExpenseAbout from './components/ExpenseAbout';

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
        setInitialRoute(accountName ? 'Main' : 'StartScreen');
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
        <TagProvider>
          <GoalProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
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
            name="TagSelectionPage"
            component={TagSelectionPage}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="CustomTagPage"
            component={CustomTagPage}
            options={{headerShown:false}}
            />
            <Stack.Screen
              name="PieChartPage"
              component={PieChartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarChartPage"
              component={BarChartPage}
              options={{ headerShown: false }}
            />
      <Stack.Screen
              name="YearlyBarChartPage"
              component={YearlyBarChartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YearlyPieChartPage"
              component={YearlyPieChartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TotalExpense"
              component={TotalExpenseReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecordSavingsPage"
              component={RecordSavingsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingsSuggestionsPage"
              component={SavingsSuggestionsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoalPage"
              component={GoalPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingsPage"
              component={SavingsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingsDetail"
              component={SavingsDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingsPlanList"
              component={SavingsPlanList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TotalSavings"
              component={TotalSavingsReport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingScreen"
              component={SettingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppAbout"
              component={AppAbout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setup"
              component={Setup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExpenseAbout"
              component={ExpenseAbout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RankingsScreen"
              component={RankingsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BeachScreen"
              component={BeachScreen}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
        </GoalProvider>
        </TagProvider>
      </ValueProvider>
    </AccountProvider>
  );
}

export default App;