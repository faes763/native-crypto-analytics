import Main from "./components/Main";
import CoinPage from "./components/CoinPage";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f74307',
          
        },
        headerTitleStyle: {
          color:"#fff"
        }
      }}>
        <Stack.Screen name="Coins" component={Main} />
        <Stack.Screen name="Coin" component={CoinPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;