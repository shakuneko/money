import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import TransferScreen from "./screens/TransferScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import FinishScreen from "./screens/FinishScreen"
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();



export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator initialRootName="Login">
          <Stack.Screen name = "Login" component={LoginScreen} 
            options={{
              headerStyle: {
                height: 0,
              },
              headerShown:false
            }}/>
            <Stack.Screen name=" " component={BottomTabNavigator} 
            options={{
            headerStyle: {
              height: 0,
            },
            headerLeft: false
          }}/>
          <Stack.Screen name="TransferScreen" component={TransferScreen} 
           options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft:false
          }}/>
          <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} 
           options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: false
          }}/>
          <Stack.Screen name="FinishScreen" component={FinishScreen} 
           options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: false
          }}/>
           <Stack.Screen name = "Register" component={RegisterScreen} 
          options={{
            headerStyle: {
              height: 0,
            },
            headerShown:false
          }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
