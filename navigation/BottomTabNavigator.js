import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ListScreen from '../screens/ListScreen';
import PersonalScreen from '../screens/PersonalScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

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
          title: '首頁',
          tabBarIcon: ({ focused }) => {
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
        name="Links"
        component={LinksScreen}
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
        name="List"
        component={ListScreen}
        options={{
          title: '收據明細',
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
        name="Personal"
        component={PersonalScreen}
        options={{
          title: '個人頁面',
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

