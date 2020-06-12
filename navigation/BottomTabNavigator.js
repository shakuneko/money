import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Image } from 'react-native';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BagScreen from '../screens/BagScreen';
import PersonalScreen from '../screens/PersonalScreen';
import ListScreen from '../screens/ListScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor:'#FFFFFF',
        inactiveTintColor:'gray',
        style:{
          backgroundColor:'#4D4231',
          height:60,
        }
      }}>
        
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "首頁",
          tabBarIcon: ({ focused ,tintColor }) => {
            if(focused ){
              return(
              <Image style = {{width:50,height:50}} source = {require("../assets/images/home.png")}/>)}
              else{
                return(
             <Image style = {{width:40,height:40}} source = {require("../assets/images/home.png")}/>)}
          }

        }}
      />
      <BottomTab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          title: '收付',
          tabBarIcon: ({ focused }) => {
          if(focused ){
            return(
            <Image style = {{width:50,height:50}} source = {require("../assets/images/money.png")}/>)}
            else{
              return(
           <Image style = {{width:40,height:40}} source = {require("../assets/images/money.png")}/>)}
        }
        }}
      />
       <BottomTab.Screen
        name="Personal"
        component={PersonalScreen}
        options={{
          title: '個人頁面',
          tabBarIcon: ({ focused }) => {
            if(focused ){
              return(
              <Image style = {{width:50,height:50}} source = {require("../assets/images/list.png")}/>)}
              else{
                return(
             <Image style = {{width:40,height:40}} source = {require("../assets/images/list.png")}/>)}
          }
        }}
      />
       <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: '收據明細',
          tabBarIcon: ({ focused }) => {
            if(focused ){
              return(
              <Image style = {{width:50,height:50}} source = {require("../assets/images/personal.png")}/>)}
              else{
                return(
             <Image style = {{width:40,height:40}} source = {require("../assets/images/personal.png")}/>)}
          }
        }}
      />


    </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
