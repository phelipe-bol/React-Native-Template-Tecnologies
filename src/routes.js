import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './pages/main';
import CompStateRedux from './pages/compStateRedux';
import SharePdf from './pages/sharePdf';
import StoreImage from './pages/storeImage';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CompStateRedux" component={CompStateRedux} />
        <Stack.Screen name="SharePdf" component={SharePdf} />
        <Stack.Screen name="StoreImage" component={StoreImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
