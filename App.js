import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './Menu';
import CartScreen from './Cart';
import ProfileScreen from './Profile';
import Form1Screen from './Form1';
import Form2Screen from './Form2';
import Form3Screen from './Form3';
import { ProfileProvider } from './ProfileContext';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FormsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Form1" component={Form1Screen} />
    <Stack.Screen name="Form2" component={Form2Screen} />
    <Stack.Screen name="Form3" component={Form3Screen} />
  </Stack.Navigator>
);

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <ProfileProvider>
        <ThemeProvider>
          <CartProvider> 
            <Stack.Navigator initialRouteName="Forms">
              <Stack.Screen
                name="Forms"
                component={FormsStack}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </CartProvider>
        </ThemeProvider>
      </ProfileProvider>
    </NavigationContainer>
  );
};

export default App;
